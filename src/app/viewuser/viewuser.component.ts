import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  obj1: any;
  obj2: any;
  obj3: any;
  obj4: any;
  obj5: any;

  constructor(private api:ApiService , private route:Router) { }

  ngOnInit(): void {
    this.obj1=localStorage.getItem("Name")
    this.obj2=localStorage.getItem("Email")
    this.obj3=localStorage.getItem("Mobile")
    this.obj4=localStorage.getItem("address")
    this.obj5=localStorage.getItem("product")
  }
deleteBooking(id:any,rev:any){
  this.api.deleteData(id,rev).subscribe((data)=>{
    console.log(data);
    alert('Data deleted');
   window.location.reload();
   })
}
goBack(){
  this.route.navigate(['blog'])
}
}
