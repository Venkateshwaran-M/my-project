import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  formGroup: FormGroup;
userdetails: any = {
  firstName:'',
  lastname:'',
  email:'',
  mobile:'',
  leadsource:'',
  product:'',
}
db="freshers_sample";
  alluser: any;
  alluserData: any;
  constructor(private fb:FormBuilder, private api: ApiService) {
    {
      this.formGroup=this.fb.group({
        firstName: [this.userdetails.firstName],
        lastName:[this.userdetails.lastName],
        email:[this.userdetails.email],
        mobile:[this.userdetails.mobile],
        leadsource:[this.userdetails.leadsource],
        product:[this.userdetails.product]

        
      })
    }
   }

  ngOnInit(): void {
  }
get firstName(){
  return this.formGroup.get('firstName')!;
}
get lastName(){
  return this.formGroup.get('lastName')!;
}
get email(){
  return this.formGroup.get('email')!;
}
get mobile(){
  return this.formGroup.get('mobile')!;
}
get leadsource(){
  return this.formGroup.get('leadsource')!;
}
get product(){
  return this.formGroup.get('product')!;
}
storing(formdata:NgForm){
  this.api.add("freshers_sample",this.formGroup.value).subscribe(res =>{
    console.log(formdata);
    console.log(res);
    this.alluser=res;
    alert('Message sent');
    this.alluser.reset();

  },rej=>{
    alert('Something bad happened'+rej);
    console.log(rej);
  });
 
  this.api.get("freshers_sample").subscribe(res=>{
    this.alluser=res;
    console.log(res);
    this.alluser=this.alluser.rows;
    this.alluserData=this.alluser.map((el:any)=>el.doc);
    console.log(this.alluserData[0]);
    for (const array in this.alluserData){
      console.log(this.alluserData[array])
    }
    alert("data got successful");
    this.userdetails.reset();
  },rej=>{
    alert("cannot post data"+rej);
  });
}
fetch(){
  this.api.get(this.db).subscribe((data)=>{
    console.log("Data has been fetched", data);
  })
}
}
