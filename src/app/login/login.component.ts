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
  loginCredential: any;
  constructor(private fb: FormBuilder, private api:ApiService, private route:Router, private toastr:ToastrService) {
    
      this.formGroup = this.fb.group({
        email:[this.user.email],
        password:[this.user.password],
        type:[this.user.type]
      });
    localStorage.setItem("role","user")
   }

  ngOnInit(): void {
    // code to be implemented

  }

login(formvalue:any){
  let datas={
    email:formvalue.email
  }
  
    localStorage.setItem("Loginid",this.formGroup.value.email)
  
  
 this.api.checkuserlogin(datas).subscribe(data=>{
  this.loginUser=data.docs[0]
  console.log(this.loginUser)
  if (data.docs.length <= 0) {
    this.toastr.error("Invalid credentials");
  }
 else
 { 
   if (data.docs[0].email === formvalue.email) {
  localStorage.setItem('userId',(this.loginUser._id))
   }
 }
  

    
 if (data.docs[0].password === formvalue.password) 
    {
      this.toastr.success("Login Successfully");
      this.route.navigate(['/blog']);
      //  { queryParams: this.loginUser   })
    }
  else {
      this.toastr.error("Enter Correct Password");
  }
 },rej=>{
   console.log(rej); })
}


  
 
 cancel(){
   this.formGroup.reset()
 }

}































































