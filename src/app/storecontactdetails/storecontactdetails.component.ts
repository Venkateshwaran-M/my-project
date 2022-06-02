import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-storecontactdetails',
  templateUrl: './storecontactdetails.component.html',
  styleUrls: ['./storecontactdetails.component.css']
})
export class StorecontactdetailsComponent implements OnInit {
  temp:any;
  sample: any;
  viewVal: any;

  constructor(private api:ApiService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.api.get("freshers_sample").subscribe(res=>{
      console.log(res);
      this.temp=res
      this.sample=this.temp.rows;
      this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='Additionalinfo').map((x:any)=>x.doc)
  },rej=>{
    this.toastr.error("cannot post data"+rej);
  });
  }

}
