import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  obj: any;
  viewtable: any ;
  sample: any;
  viewVal: any =[];
  regid:any;
 
  constructor(private api:ApiService ,private toastr:ToastrService, private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.regid=localStorage.getItem("userId");
   
      
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

      },rej=>{
        this.toastr.error("Cant View Your Booked Status",rej)
      })
  }

goBack(){
  this.route.navigate(['blog'])
}
logout(){
  localStorage.clear();
  this.route.navigate(['log-in'])

  this.toastr.success("Logged Out Successfully!!! Please do visit us again😉")
}
}
