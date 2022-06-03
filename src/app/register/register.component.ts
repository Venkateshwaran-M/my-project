import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{ApiService} from '../api.service' 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  userRecord: any = {
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    mobile: '',
    type:'user'
    
  };
  alluser:any;
  db="freshers_sample";
  regUser: any;
  localStorage: any;
  constructor(private fb:FormBuilder, private api:ApiService, private route:Router, private toastr:ToastrService) { 
    {
      this.formGroup = this.fb.group({
        firstName: [this.userRecord.firstName],
        lastName: [this.userRecord.lastName],
        email: [this.userRecord.email],
        password:[this.userRecord.password],
        mobile: [this.userRecord.mobile],
        type: [this.userRecord.type],
      });
    }
  }

  ngOnInit(): void {
  }
  get firstName(){
    return this.formGroup.get('firstName')!
  }
  get lastName() {
    return this.formGroup.get('lastName')!;
  }
  get email() {
    return this.formGroup.get('email')!;
  }
  get mobile() {
    return this.formGroup.get('mobile')!;
  }
  get password() {
    return this.formGroup.get('password')!;
  }
  storing(Formvalue:any)
  {
    console.log("form",Formvalue);
    this.api.storedata(Formvalue).subscribe((data)=>{
      this.toastr.success("Sign-up Succesfully")
      this.route.navigate(['log-in']); 
      console.log("data returned from server",data);  
    },err=>{
      console.log(err)
    })
 
  }

}

 

