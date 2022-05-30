import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, private api:ApiService, private route:Router) {
    {
      this.formGroup = this.fb.group({
        email:[this.user.email, [Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
        password:[this.user.password, [Validators.required, Validators.pattern("[a-zA-z@_]{6,}")]],
        type:[this.user.type]
      });
    }
   }

  ngOnInit(): void {
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
       alert("success!!")
      //  toastr.success('Have fun storming the castle!', 'Miracle Max Says')
 
      this.route.navigate(['blog']);
     }
     else{
      // this.toastr.warning("Hi Patient wrong authentication,Please enter correct Email and Password");
      alert("kindly check your email and password");
      alert("If you are new to shipmate please signup");
     }
    })
  
 }
 cancel(){
   this.formGroup.reset()
 }

}






























































// get email(){
//   return this.formGroup.get('email')!;
// }
// get password(){
//   return this.formGroup.get('password')!;
// }
// storing(Formvalue:any){
//   this.api.checkuserlogin(Formvalue.email).subscribe((data)=>{
   
//     console.log(data);
   
//     if((data.docs[0].email == Formvalue.email))
//     // if((data.email == Formvalue.email))
//     {
//      alert("userName Already Exists");
//      window.location.reload();
      
//     }
//     else{
//      alert("Success");
//      this.api.storedata(Formvalue).subscribe((data)=>{
//        alert('login success')
//       console.log("data returned from server",data);
//      })
//   //  this.route.navigate(['schedule',Formvalue.email,Formvalue.password]);

//     }
//    }) 

//   this.api.storedata(Formvalue).subscribe((data)=>{
//     console.log("Login success",data);

//   })

// }


// fetch(){
//   this.api.get(this.db).subscribe((data)=>{
//     // alert('Login success')
//     console.log("Data has been fetched",data);
//   })
// }