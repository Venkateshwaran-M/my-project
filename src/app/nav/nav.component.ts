import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
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
  type:'demo'
}
db="freshers_sample";
  alluser: any;
  alluserData: any;
  temp: any;
  sample: any;
  viewVal: any;
  constructor(private fb:FormBuilder, private api: ApiService, private toastr: ToastrService) 
    {

      this.formGroup=this.fb.group({
        firstName: [this.userdetails.firstName],
        lastname:[this.userdetails.lastname],
        email:[this.userdetails.email],
        mobile:[this.userdetails.mobile],
        leadsource:[this.userdetails.leadsource],
        product:[this.userdetails.product],
        type:[this.userdetails.type]

        
      })
    }
   

  ngOnInit(): void {
       this.api.get("freshers_sample").subscribe(res=>{
      this.temp=res
      this.sample=this.temp.rows;
      this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='addproduct').map((x:any)=>x.doc)
  });
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
    this.toastr.success("Message sent successfully please wait for our response")
    this.alluser.reset();

  },rej=>{
    this.toastr.error("Required Fields are Empty")
    console.log(rej);
  });
 
  // this.api.get("freshers_sample").subscribe(res=>{
  //   this.alluser=res;
  //   console.log(res);
  //   this.alluser=this.alluser.rows;
  //   this.alluserData=this.alluser.map((el:any)=>el.doc);
  //   console.log(this.alluserData[0]);
  //   for (const array in this.alluserData){
  //     console.log(this.alluserData[array])
  //   }
  //   alert("data got successful");
  //   this.userdetails.reset();
  // },rej=>{
  //   alert("cannot post data"+rej);
  // });
}
fetch(){
  this.api.get(this.db).subscribe((data)=>{
    console.log("Data has been fetched", data);
  })
}
}
