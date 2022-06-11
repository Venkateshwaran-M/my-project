import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as lodash from 'lodash'
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  
  obj: any;
  viewtable: any ;
  sample: any;
  viewVal: any =[];
  regid:any;
  temp:any;
  constructor(private api:ApiService ,private toastr:ToastrService, private route:Router, private router:ActivatedRoute) { 

  }
  ngOnInit(): void {
    this.regid=localStorage.getItem("userId");    
    this.getDataByView()  
     
  }
  getDataByView(){
    const data = {
      "keys": [ "order" + this.regid ], 
      "include_docs": true
    }
    this.api.getUsingView(data).subscribe(res=>{
      console.log(res);
      this.viewtable =res;
      this.viewtable=this.viewtable.rows;
      for(const i of this.viewtable){
        this.viewVal.push(i.doc)
      }
      let locationId = lodash.uniq(this.viewVal.map((ele: { product: any; }) => ele['product']))
      console.log(locationId)
      this.api.getLocation(locationId).subscribe((datas:any)=>{
        const lookupData=datas.rows.map((el:any)=>el.doc)
        this.viewVal.forEach((element:any) => {
          const product =lookupData.filter((el:any)=>el['_id'] === element['product'])[0]
          element['product']=product['addproduct']
        });
        console.log("Data",data)
       

        })
    },rej=>{
      this.toastr.error("Cant View Your Booked Status",rej)
    });
  }
goBack(){
  this.route.navigate(['blog'])
}
logout(){
  localStorage.clear();
  this.route.navigate(['log-in'])
  this.toastr.success("Logged Out Successfully!!! Please do visit us again😉")
}
view(id:any){
  this.api.getById("freshers_sample/",id).subscribe(res=>{
    this.temp=res
    console.log(this.temp)
  this.route.navigate(['view'],{queryParams:{
    data:this.temp._id
  }})
  })

}
edit(id:any,rev:any){
  this.route.navigate(['edit'],{queryParams:{data:id,rev}})
  console.log(id+rev)

}
deleteuser(id:any,rev:any){
  this.api.deleteData(id,rev).subscribe(res=>{
    console.log(res)
    this.toastr.error("Data Deleted Successfully","Data Deleted");
    this.route.navigate(['viewuser'])
    window.location.reload()

    this.getDataByView()  ;
  },rej=>{
    console.log(rej.error)
  })

}
}
