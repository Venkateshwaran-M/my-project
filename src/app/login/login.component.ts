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
    {
      this.formGroup = this.fb.group({
        email:[this.user.email],
        password:[this.user.password],
        type:[this.user.type]
      });
    }
   }

  ngOnInit(): void {

  }

login(formvalue:any){
  let datas={
    email:formvalue.email
  }
  // this.email=obj.email
  // this.password=obj.password
  // console.log(this.email);
  // console.log(this.password);
  // this.api.getdata(datas).subscribe(data=>{
  //   console.log(data)
    // this.loginCredential=data;
    localStorage.setItem("Loginid",this.formGroup.value.email)
  
  
 this.api.checkuserlogin(datas).subscribe(data=>{
  this.loginUser=data.docs[0]
  console.log(this.loginUser)
  localStorage.setItem('userId',(this.loginUser._id))
  if (data.docs.length <= 0) {
    this.toastr.error("Invalid credentials");
  }
  if (data.docs[0].email === formvalue.email) 
  {
    if (data.docs[0].password === formvalue.password) 
    {
      this.toastr.success("Login Successfully");
      this.route.navigate(['/blog'],
       { queryParams: this.loginUser   })
    } else {
      this.toastr.error("Enter Correct Password");
    }
  }




//  let localObject:any=localStorage.getItem('userId')
//  console.log(localObject);
//  let temp = JSON.parse(localObject.toString());
//  console.log(temp['_id']) 
//  this.localStorage=localStorage.setItem("regID",(temp['_id']));
    //  console.log(data);
     
    //  if((data.docs[0].password == this.password && data.docs[0].email==this.email))
    //  {
    //   this.route.navigate(['blog']);

    //   this.toastr.success("Login Success")

    //   localStorage.setItem('email',JSON.stringify(this.email))
    //  }
    //  else{
    //   this.toastr.error("Username or password mismaches");
    //  }
   
    })
  
 }
 cancel(){
   this.formGroup.reset()
 }

}






























































