import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookinginfo',
  templateUrl: './bookinginfo.component.html',
  styleUrls: ['./bookinginfo.component.css']
})
export class BookinginfoComponent implements OnInit {
  formGroup: FormGroup 
  user:any={
    name:'',
    email:'',
    mobile:'',
    address:'',
    product:''
  }
  alluser: any;
  alluserData: any;
  constructor(private fb:FormBuilder, private api: ApiService) {
    {
      this.formGroup=this.fb.group({
        name:[this.user.name],
        email:[this.user.email],
        mobile:[this.user.mobile],
        address:[this.user.mobile],
        product:[this.user.product],
      })
    }
   }

  ngOnInit(): void {
    this.storing(this.formGroup.value)

  }
  get name(){
    return this.formGroup.get('name')!;
  
  }
  get email(){
    return this.formGroup.get('email')!; 
  }
  get mobile(){
    return this.formGroup.get('mobile')!;
    
  }
  get address(){
    return this.formGroup.get('address')!;
    
  }
  get product(){
    return this.formGroup.get('product')!;
    
  }
  storing(formdata: NgForm){
    this.api.add("freshers_sample",this.formGroup.value).subscribe(res=>{
      console.log(formdata);
      console.log(res);
      this.alluser=res;
      alert('Your product booking request has been received');
      // this.userdetails.reset();
    },rej=>{
      alert('Something Bad Happened'+rej);
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
     //  alert("data got successful");
      this.user.reset();
    },rej=>{
      alert("cannot post data"+rej);
    });
 

}
}
