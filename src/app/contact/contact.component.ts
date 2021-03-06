import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit{
  formGroup: FormGroup;
  userdetails: any = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    mobile: '',
    type:'Additionalinfo',
  };
  db="freshers_sample";
  myobj: any;
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
  ngOnInit(): void {
  localStorage.setItem("ID",this.userdetails.type._id)
  this.myobj=localStorage.getItem("username:");  
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
    console.log(Formvalue);
    console.log(res); 
    this.toastr.success("Contact details submitted successfully")

},_rej=>{
  console.log(_rej);
});
this.myobj=localStorage.getItem("User");
console.log(this.myobj);
}
cancel(){
  this.formGroup.reset();
}
}
