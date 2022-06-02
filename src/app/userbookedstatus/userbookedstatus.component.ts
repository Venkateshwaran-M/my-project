import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-userbookedstatus',
  templateUrl: './userbookedstatus.component.html',
  styleUrls: ['./userbookedstatus.component.css']
})
export class UserbookedstatusComponent implements OnInit {
  temp: any;
  sample: any;
  viewVal: any=[];
  dropdown: any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get("freshers_sample").subscribe(res=>{
      console.log(res);
      this.temp=res
      this.sample=this.temp.rows;
      this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='order').map((x:any)=>x.doc)
  },rej=>{
    alert("cannot post data"+rej);
  });

}}
