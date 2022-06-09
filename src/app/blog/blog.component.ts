import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  formGroup: FormGroup;
  userdetails: any={
    name:'',
    email:'',
    mobile:'',
    address:'',
    product:'',
    type:'order'
  }
  alluser: any;
  formdata: any;
  alluserData: any;
  idValue:any;
  id: any;
  type: string | undefined;
  data: any;
  localObject: any;
  temp: any;
  viewVal: any=[];
  sample: any;
  obj: any;
  myobj: any;
  myobj1: any;
  userid: any;
  myid: any;
  loginid: any;
  allproduct: any;
  prod:any;
  constructor(private fb:FormBuilder, private toastr:ToastrService, private api: ApiService, private route:Router) {    
      this.formGroup=this.fb.group({
        name:[this.userdetails.name],
        email:[this.userdetails.email],
        mobile:[this.userdetails.mobile],
        address:[this.userdetails.mobile],
        product:[this.userdetails.product],
        type:[this.userdetails.type],
        
      })
    }   
  ngOnInit(): void {
  this.loginid=localStorage.getItem("Loginid")
   this.obj=localStorage.getItem("userId")
   console.log(this.obj)
   this.myobj=localStorage.getItem('Fname')
   this.myobj1=localStorage.getItem('Lname')
   let localObject:any=localStorage.getItem('userId')
   console.log(localObject);
 
  this.api.getByTypes("addproduct").subscribe(res=>{
    console.log(res);
    this.prod=res;
    this.allproduct=this.prod.docs;
    console.log(this.allproduct)
  })
    }
get name(){
  return this.formGroup.get('name')!;
}
get email(){
  return this.formGroup.get('email')!; 
}
get mobile(){
  return this.formGroup.get('mobile')!;
}
get address(){
  return this.formGroup.get('address')!; 
}
get product(){
  return this.formGroup.get('product')!; 
}
storing(doc:any, _id:any){
  console.log(doc);
  doc['user']=this.obj;
  this.api.add("freshers_sample",doc).subscribe(res=>{
    console.log(res);
    this.alluser=res;
    this.alluserData=this.alluser;
    this.toastr.success('Your product booking request has been received');
    this.route.navigate(
      ['/viewuser'],
      { queryParams: {'productid':this.alluser.id} }
    );

    this.api.getByType("order",this.alluser.id).subscribe(data=>{
      console.log(data)
      this.userid=this.id
      console.log(this.id)
    this.myid=this.alluser.id;
    console.log(this.myid)
    })
  },rej=>{
    this.toastr.error("Kindly fill the form")
    console.log(rej);
  });
 localStorage.setItem("Name",doc.name)
 localStorage.setItem("Email",doc.email)
 localStorage.setItem("Mobile",doc.mobile)
 localStorage.setItem("address",doc.address)
 localStorage.setItem("product",doc.product)
 

}
cancel(){
  this.formGroup.reset();
}
logout(){
  // localStorage.clear()
  this.route.navigate(['log-in'])
  this.toastr.success("Logged Out Successfully!!! Please do visit us again😉")
}

}
