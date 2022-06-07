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

   this.obj=localStorage.getItem("email")

   this.myobj=localStorage.getItem('Fname')
   this.myobj1=localStorage.getItem('Lname')


   let localObject:any=localStorage.getItem('userId')
   console.log(localObject);
   let temp = JSON.parse(localObject.toString());
   this.id=temp['_id'] 
   this.api.get("freshers_sample").subscribe(res=>{
    console.log(res);
    this.temp=res
    this.sample=this.temp.rows;
    this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='addproduct').map((x:any)=>x.doc)
       
     },_rej=>{
       this.toastr.error("Cannot view products")
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
storing(doc:any, _id:any){
  console.log(doc);
  doc['user']=this.id;
  this.api.add("freshers_sample",this.formGroup.value).subscribe(res=>{
    console.log(res);
    this.alluser=res;
    this.alluserData=this.alluser.docs;
    this.toastr.success('Your product booking request has been received');
  this.route.navigate(['viewuser'])

    this.type="order"
    this.api.postByTypedUser("freshers_sample",this.type,this.id).subscribe(data=>{
      console.log(data)
      console.log(this.id)
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
  this.route.navigate(['log-in'])
  this.toastr.success("Logged Out Successfully!!! Please do visit us again😉")
}

}
