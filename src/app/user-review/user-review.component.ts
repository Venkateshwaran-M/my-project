import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { type } from 'os';
@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
 formGroup: FormGroup;
 user:any={
   Name:'',
   productname:'',
   feedback:'',
   rating:'',
   type:'feedback'
 }
  alluser:any;
  alluserData: any;
  viewVal: any=[];
  temp:any;
  sample: any;
  dropdown: any;
  constructor(private fb: FormBuilder,private toastr:ToastrService, private api: ApiService, private  route:Router) { 
   
    this.formGroup=this.fb.group({
    Name:[this.user.Name],
      productname:[this.user.productname],
      feedback:[this.user.feedback],
      rating:[this.user.rating],
      type:[this.user.type]
    });

  }

 

  ngOnInit(): void {
  
     this.api.get("freshers_sample").subscribe(res=>{
     this.temp=res
     this.sample=this.temp.rows;
     this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='feedback').map((x:any)=>x.doc)
     this.dropdown=this.temp.rows.filter((y:any)=>y.doc.type=='addproduct').map((y:any)=>y.doc)

      //  this.alluserData=this.alluser.map((el:any)=>el.doc);
      //  console.log(this.alluserData[0]);
      //  for (const array in this.alluser){
      //    this.viewVal.push(array.docs)
      //  }
       //  alert("data got successful");
      //  this.user.reset();
     },rej=>{
       this.toastr.error("cannot post data"+rej);
     });
    
  }

  get Name(){
    return this.formGroup.get('Name')!;
  }
  get productname(){
    return this.formGroup.get('productname')!;
  }
  get feedback(){
    return this.formGroup.get('feedback')!;
  }
  get rating() {
    return this.formGroup.get('rating')

  }
storing(formdata: NgForm){

  this.api.add("freshers_sample",this.formGroup.value).subscribe(res => {
    //  this.route.navigate(['feedback'])
     console.log(formdata);
     console.log(res);
     this.alluser=res;
     window.location.reload()
     this.toastr.success('Thanks for your feedback');
   },rej => {
     this.toastr.error("Please fill all the fields")
     console.log(rej);
   });
//  this.api.add("freshers_sample",this.formGroup.value).subscribe(res => {
//   //  this.route.navigate(['feedback'])
//    console.log(formdata);
//    console.log(res);
//    this.alluser=res;
//    this.toastr.success('Thanks for your feedback');
//  },rej => {
//    this.toastr.error("Please fill all the fields")
//    console.log(rej);
//  });
//  this.api.get("freshers_sample").subscribe(res=>{
//    this.alluser=res;
//    console.log(res);
//    this.alluser=this.alluser.rows;
//    this.alluserData=this.alluser.map((el:any)=>el.doc);
//    console.log(this.alluserData[0]);
//    for (const array in this.alluserData){
//      console.log(this.alluserData[array])
//    }
//   //  alert("data got successful");
//    this.user.reset();
//  },rej=>{
//    alert("cannot post data"+rej);
//  });
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



