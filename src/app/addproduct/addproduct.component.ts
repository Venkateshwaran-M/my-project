import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent implements OnInit {
  formGroup:FormGroup

  user:any={
    productname:'',
    price:'',
    description:'',
    image:'',
    type:'addproduct'
  }
  alluser: any;
  alluserData: any;

  userData: any;
  constructor(private fb: FormBuilder,private route:Router, private api: ApiService, private toastr:ToastrService) {
    this.formGroup = this.fb.group({
      addproduct:[this.user.addproduct],
      price:[this.user.price],
      description:[this.user.desciption],
      image:[this.user.image],
      type:[this.user.type]

  });
  }
  get addproduct(){
    return this.formGroup.get('addproduct')!
  }
  get price() {
    return this.formGroup.get('price')!;
  }
  get description() {
    return this.formGroup.get('description')!;
  }
  get image() {
    return this.formGroup.get('image')!;
  }
  get addleadsource(){
    return this.formGroup.get('addleadsource')!;
  }
  ngOnInit(): void {
// code to be implemented
  }
  
  show(formdata:NgForm){
    this.api.add("freshers_sample",this.formGroup.value).subscribe(res=>{
      this.toastr.success("The product has been added successfully")
      console.log(res);
      console.log(formdata)
      this.alluser=res;
      window.location.reload();
    },rej=>{
      this.toastr.error("Something Went wrong",rej);
    }
    );
  }
 router(){
   this.route.navigate(['userbookedstatus']);
 }
 navigate(){
   this.route.navigate(['Demouser']);
 }
 contactdetails(){
   this.route.navigate(['usercontactdetails']);
 }
 seeproduct(){
   this.route.navigate(['adminviewproduct']);
 }
 seeregusers(){
  this.route.navigate(['regusers']);
}
logout(){
  this.route.navigate(['admin']);
  this.toastr.success("Logout Successful");
}
  }
