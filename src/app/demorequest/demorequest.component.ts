import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {  ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-demorequest',
  templateUrl: './demorequest.component.html',
  styleUrls: ['./demorequest.component.css']
})
export class DemorequestComponent implements OnInit {
  sample: any;
  temp: any;
  viewVal: any;

  constructor(private api:ApiService, private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
    this.api.get("freshers_sample").subscribe(res=>{
      console.log(res);
      this.temp=res
      this.sample=this.temp.rows;
      this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='demo').map((x:any)=>x.doc)
  },rej=>{
    this.toastr.error("cannot view data"+rej);
  });
  }

goBack(){
  this.route.navigate(['addproduct']);
}

}
