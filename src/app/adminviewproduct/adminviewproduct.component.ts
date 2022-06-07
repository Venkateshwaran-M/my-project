import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminviewproduct',
  templateUrl: './adminviewproduct.component.html',
  styleUrls: ['./adminviewproduct.component.css']
})
export class AdminviewproductComponent implements OnInit {
  temp: any;
  viewVal: any;
  sample: any;

  constructor(private api:ApiService, private toastr:ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.api.get("freshers_sample").subscribe(res=>{
      console.log(res);
      this.temp=res
      this.sample=this.temp.rows;
      this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='addproduct').map((x:any)=>x.doc)
         
       },_rej=>{
         this.toastr.error("Cannot view products")
       });
  }
  goBack(){
    this.route.navigate(['addproduct'])
  }
deleteProduct(id:any,rev:any){
  this.api.deleteData(id,rev).subscribe((data)=>{
    console.log(data);
    alert('Data deleted');
   window.location.reload();
   })
}
}
