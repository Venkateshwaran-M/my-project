import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
 formGroup: FormGroup;
 user:any={
   firstName:'',
   product:'',
   feedback:'',
   rating:'',
 }
  alluser:any;
  alluserData: any;
  constructor(private fb: FormBuilder, private api: ApiService, private  route:Router) { 
   
    this.formGroup=this.fb.group({
      firstName:[this.user.firstName],
      product:[this.user.product],
      feedback:[this.user.feedback],
      rating:[this.user.rating]
    });
  }

 

  ngOnInit(): void {
  }
  get firstName(){
    return this.formGroup.get('firstName')!;
  }
  get product(){
    return this.formGroup.get('product')!;
  }
  get feedback(){
    return this.formGroup.get('feedback')!;
  }
  get rating() {
    return this.formGroup.get('rating')

  }
storing(formdata: NgForm){


 this.api.add("freshers_sample",this.formGroup.value).subscribe(res => {
   this.route.navigate(['feedback'])
   console.log(formdata);
   console.log(res);
   this.alluser=res;
   alert('Thanks for your feedback');
   this.user.reset();
 },rej => {
   alert('Something Bad happened'+ rej);
   console.log(rej);
 });
 this.api.get("freshers_sample").subscribe(res=>{
   this.alluser=res;
   console.log(res);
   this.alluser=this.alluser.rows;
   this.alluserData=this.alluser.map((el:any)=>el.doc);
   console.log(this.alluserData[0]);
   for (const array in this.alluserData){
     console.log(this.alluserData[array])
   }
  //  alert("data got successful");
   this.user.reset();
 },rej=>{
   alert("cannot post data"+rej);
 });
//  this.api.getDocsByID("reviews","33a48a66e90cf60a72f5576b5a099047").subscribe(res=>{
//    var temp=res;
//    console.log(temp);
//    alert("one id got from db");
//    this.user.reset();
//  },rej=>{
//    alert("404 error"+rej);
//  } );
}
erase(id:any,rev:any){
  this.api.deleteData(id,rev).subscribe((data)=>{
   console.log(data);
   alert('Data deleted');
  window.location.reload();
  })
} 
}



