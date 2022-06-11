import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  temp: any;
  prod: any;
  allproduct: any;
  id: any;
  rev: any;
  regid:any;

  constructor(private acroute:ActivatedRoute,private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.regid=localStorage.getItem("userId");   
  this.acroute.queryParams.subscribe(res=>{
  this.temp=res
  this.id=this.temp.data
  this.rev=this.temp.rev
  console.log(this.temp)
    })
  this.api.getById("freshers_sample/",this.temp.data).subscribe(res=>{
    this.temp=res
  this.setValueToForm();


  this.api.getByTypes("addproduct").subscribe(res=>{
    console.log(res);
    this.prod=res;
    this.allproduct=this.prod.docs;
    console.log(this.allproduct)
  })
}
)
  }
  formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl(''),
    product: new FormControl(''),
    
  });
 
    
 setValueToForm() {
    this.formGroup.setValue({ name: this.temp.name, email: this.temp.email, mobile: this.temp.mobile,  address: this.temp. address, product: this.temp. product })
  }
  updataData(doc:any){
   doc['type']='order'
   doc['user']=this.regid
   console.log(doc) 
   this.api.updateDataUser(doc,this.id,this.rev).subscribe(res=>{
    console.log("updated data is",res)
    alert("Data Modified Successfully")
    this.router.navigate(['viewuser'],{queryParams:{data:this.temp._id}})
   })
  }
}
// address: "17,Ayyappan nagar chennai"
// email: "baskar@gmail.com"
// mobile: 1234567890
// name: "venkateshwaran"
// product: "Ship Management System"
// type: "order"
// user: "675196992d69a9ceda65d198612fe77f"
// _id: "19b33695ab90e60ab1f4e2b4831971c4"
// _rev: "1-00129a25fd4b5b989b2a33b784080784"