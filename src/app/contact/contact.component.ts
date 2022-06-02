import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  formGroup: FormGroup;
  userdetails: any = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    mobile: '',
    type:'Additionalinfo'
  };
  db="freshers_sample";
  constructor(private fb: FormBuilder, private toastr:ToastrService, private api:ApiService) {
    this.formGroup = this.fb.group({
      firstName: [this.userdetails.firstName],
      lastName: [this.userdetails.lastName],
      email: [this.userdetails.email],
      location: [this.userdetails.location],
      mobile: [this.userdetails.mobile],
      type:[this.userdetails.type]
    });
  }
  get firstName() {
    return this.formGroup.get('firstName')!;
  } get lastName() {
    return this.formGroup.get('lastName')!;
  }
  get email() {
    return this.formGroup.get('email')!;
  }
  get mobile() {
    return this.formGroup.get('mobile')!;
  }
  get location() {
    return this.formGroup.get('location')!;
  }
storing(Formvalue:any)
{
   this.api.add("freshers_sample",this.formGroup.value).subscribe(res => {
    this.toastr.success("Data stored")
    console.log(Formvalue);
    console.log(res);
  
},_rej=>{
  this.toastr.error("Cannot Post Data until field are empty",_rej)
});
}
fetch(){
  this.api.get(this.db).subscribe((data)=>{
    alert('Your data has been Submitted')
    console.log("Data fetched",data);
    
  })
}
cancel(){
  this.formGroup.reset();
}
}
