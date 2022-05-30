import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
  constructor(private fb: FormBuilder, private api:ApiService) {
    this.formGroup = this.fb.group({
      firstName: [this.userdetails.firstName],
      lastName: [this.userdetails.lastName],
      email: [this.userdetails.email],
      location: [this.userdetails.location],
      // password: [this.userdetails.password],
      mobile: [this.userdetails.mobile],
      Additionalinfo:[this.userdetails.Additionalinfo]
    });
  }


  ngOnInit(): void {
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
  console.log(Formvalue);
  this.api.storedata(Formvalue).subscribe((data)=>{
    alert("Your details has been submitted successfully, Thank you☺");

    console.log("Data returned from server",data);
  })
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
