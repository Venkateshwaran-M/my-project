import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{ApiService} from '../api.service' 
import { Router } from '@angular/router';

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
  constructor(private fb:FormBuilder, private api:ApiService, private route:Router) { 
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
      alert("Sign-up Succesfully")

    //   this.regUser=data.docs[0]
    //   console.log(this.regUser._id)
    //   this.localStorage=localStorage.setItem('userId',JSON.stringify(this.regUser))
    //   let localObject:any=this.localStorage.getItem('userId')
    //   console.log(localObject);
    //   let temp = JSON.parse(localObject.toString());
    //   console.log(temp['_id'])
      console.log("data returned from server",data);
      this.route.navigate(['log-in']);
      // this.api.add("freshers_sample",this.formGroup.value).subscribe(res => {
      //   console.log(Formvalue);
      //   console.log(res);
      //   this.alluser=res;
      //   alert('Data inserted');
        

      // }
      // ,rej => {
      //   alert('Something Bad happened'+ rej);
      //   console.log(rej);
      // });
    })
  //  this.api.getByType("freshers_sample",this.formGroup.value).subscribe(res=>{
      // console.log(Formvalue);
  //    console.log(res);
   // })
  }


fetch() {
  this.api.get(this.db).subscribe((data) => {
    console.log("Data are fetched",data);
  })
}
}

 

