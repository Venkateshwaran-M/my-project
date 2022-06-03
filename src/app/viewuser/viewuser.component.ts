import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.obj1=localStorage.getItem("Name")
    this.obj2=localStorage.getItem("Email")
    this.obj3=localStorage.getItem("Mobile")
    this.obj4=localStorage.getItem("address")
    this.obj5=localStorage.getItem("product")
  }

}
