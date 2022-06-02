import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-demorequest',
  templateUrl: './demorequest.component.html',
  styleUrls: ['./demorequest.component.css']
})
export class DemorequestComponent implements OnInit {
  sample: any;
  temp: any;
  viewVal: any;

  constructor(private api:ApiService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.api.get("freshers_sample").subscribe(res=>{
      console.log(res);
      this.temp=res
      this.sample=this.temp.rows;
      this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='demo').map((x:any)=>x.doc)
  },rej=>{
    this.toastr.error("cannot post data"+rej);
  });
  }

}
