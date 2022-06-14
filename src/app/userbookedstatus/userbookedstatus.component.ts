import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import * as lodash from 'lodash';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-userbookedstatus',
  templateUrl: './userbookedstatus.component.html',
  styleUrls: ['./userbookedstatus.component.css']
})
export class UserbookedstatusComponent implements OnInit {
  [x: string]: {};
  temp: any;
  sample: any;
  viewVal: any=[];
  dropdown: any;
viewtable:any
  productIds : any = [];

  constructor(private api:ApiService, private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
    this.api.getByTypes("order").subscribe(res=>{
      console.log(res);
      this.viewtable=res;
      this.viewtable=this.viewtable.docs;
      for(const i of this.viewtable){
        this.viewVal.push(i)
      }
      let locationId = lodash.uniq(this.viewVal.map((ele: { product: any; }) => ele['product']))
      console.log(locationId)
      this.api.getLocation(locationId).subscribe((data:any)=>{
        console.log(data);
        const lookupData=data.rows.map((el:any)=>el.doc)
        this.viewVal.forEach((element:any) => {
          const product =lookupData.filter((el:any)=>el['_id'] === element['product'])[0]
          element['product']=product['addproduct']
        });
        console.log("Data",data)
        })
    })
  
}

goBack(){
  this.route.navigate(['addproduct']);
}}



  //   this.api.get("freshers_sample").subscribe(res=>{
  //     console.log(res);
  //     this.temp=res
  //     this.sample=this.temp.rows;
  //     this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='order').map((x:any)=>x.doc)
  //     console.log(this.viewVal);

  //     // this.productIds = this.viewVal

  //     for (let i = 0; i < this.viewVal.length; i++) {
  //     this.productIds[i] = this.viewVal[i].product;
        
  //     }
  //     console.log(this.productIds);

      

    

  // },rej=>{
  //   alert("cannot post data"+rej);
  // });
