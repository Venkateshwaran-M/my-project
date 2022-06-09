import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-regusers',
  templateUrl: './regusers.component.html',
  styleUrls: ['./regusers.component.css']
})
export class RegusersComponent implements OnInit {
  temp: any;
  sample: any;
  viewVal: any;

  constructor( private api:ApiService ,private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
    this.api.get("freshers_sample").subscribe(data=>{
      this.temp=data
      this.sample=this.temp.rows;
      this.viewVal = this.temp.rows.filter((x:any)=>x.doc.type=='user').map((x:any)=>x.doc)

    },rej=>{
      this.toastr.error("Cant view Details",rej)
    })
  }
  goBack(){
this.route.navigate(['addproduct'])
  }

}
