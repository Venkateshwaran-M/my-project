import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formGroup: FormGroup;
user:any={
  email:'',
  password:'',
  type:'login',

};

db="freshers_sample";
  email: any;
  password: any;
  loginUser: any;
  localStorage: any;
  myObject: any;
  constructor(private fb: FormBuilder, private api:ApiService, private route:Router, private toastr:ToastrService) {
    {
      this.formGroup = this.fb.group({
        email:[this.user.email],
        password:[this.user.password],
        type:[this.user.type]
      });
    }
   }

  ngOnInit(): void {
    // code to be implemented

  }

login(obj:any){
  this.email=obj.email
  this.password=obj.password
  console.log(this.email);
  console.log(this.password);
  
  
 this.api.checkuserlogin(this.email,this.password).subscribe(data=>{
  this.loginUser=data.docs[0]
  console.log(this.loginUser._id)
this.localStorage=localStorage.setItem('userId',JSON.stringify(this.loginUser))
 let localObject:any=localStorage.getItem('userId')
 console.log(localObject);
 let temp = JSON.parse(localObject.toString());
 console.log(temp['_id']) 
     console.log(data);
     
     if((data.docs[0].password == this.password && data.docs[0].email==this.email))
     {
      this.route.navigate(['blog']);

      this.toastr.success("Login Success")

      localStorage.setItem('email',JSON.stringify(this.email))
     }
     else{
      this.toastr.error("If you are new to shipmate please signup");
     }
    })
  
 }
 cancel(){
   this.formGroup.reset()
 }

}






























































