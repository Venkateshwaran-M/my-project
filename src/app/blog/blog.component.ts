import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
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
  constructor(private fb:FormBuilder, private api: ApiService, private route:Router) { 
    
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
   let localObject:any=localStorage.getItem('userId')
   console.log(localObject);
   let temp = JSON.parse(localObject.toString());
   this.id=temp['_id'] 
   this.api.get("freshers_sample").subscribe(res=>{
    console.log(res);
    this.temp=res
    this.sample=this.temp.rows;
    this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='addproduct').map((x:any)=>x.doc)
       
     },rej=>{
       alert("cannot post data"+rej);
     });
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

storing(doc:any, id:any){

  console.log(doc);
  doc['user']=this.id;

  this.api.add("freshers_sample",this.formGroup.value).subscribe(res=>{
    console.log(res);
    this.alluser=res;
    this.alluserData=this.alluser.docs;
    alert('Your product booking request has been received');
    this.type="order"
    this.api.postByTypedUser("freshers_sample",this.type,this.id).subscribe(res=>{
      console.log(res)
      console.log(this.id)
    })
  },rej=>{
    alert('Something Bad Happened'+rej);
    console.log(rej);
  });
 
 

  
  
 
}



cancel(){
  this.formGroup.reset();
}
}
