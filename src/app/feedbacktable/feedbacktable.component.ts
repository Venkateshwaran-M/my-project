import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacktable',
  templateUrl: './feedbacktable.component.html',
  styleUrls: ['./feedbacktable.component.css']
})
export class FeedbacktableComponent implements OnInit {
  formGroup: FormGroup;
  user:any={
    firstName:'',
    product:'',
    feedback:'',
  }
   alluser:any;
   alluserData: any;
   constructor(private fb: FormBuilder, private api: ApiService, private  route:Router) { 
    
     this.formGroup=this.fb.group({
       firstName:[this.user.firstName],
       product:[this.user.product],
       feedback:[this.user.feedback],
     });
   }
 
  
 
   ngOnInit(): void {
    this.storing(this.formGroup.value)
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
   
 storing(formdata: NgForm){
 
  this.api.add("freshers_sample",this.formGroup.value).subscribe(res => {
    console.log(formdata);
    console.log(res);
    this.alluser=res;
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
    this.user.reset();
  },rej=>{
    alert("cannot post data"+rej);
  });
 }
 back(){
   this.route.navigate(['user-review']);
 }
 erase(id:any,rev:any){
   this.api.deleteData(id,rev).subscribe((data)=>{
    console.log(data);
    alert('Data deleted');
   window.location.reload();
   })
 } 
 }
 
 
 
 