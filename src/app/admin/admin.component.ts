import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  formGroup: FormGroup;
  admin:any={
    email:'',
    password:'',
  };
  db="freshers_sample";
  email: any;
  password: any;
  constructor(private fb: FormBuilder, private api:ApiService, private route:Router) { 
    {
      this.formGroup = this.fb.group({
        email:[this.admin.email],
        password:[this.admin.password],
      });
    }
  }
 
  ngOnInit(): void {
  }
adminlogin(obj:any){
  this.email=obj.email
  this.password=obj.password
  console.log(this.email)
  console.log(this.password)

  this.api.checkuserlogin(this.email,this.password).subscribe(data=>{
    console.log(data);
    if((data.docs[0].password == this.password && data.docs[0].email==this.email)){
      alert('Admin Login Success');
      this.route.navigate(['purchase']);
    }
    else{
      alert('Login Failed')
    }
  })

}
}
