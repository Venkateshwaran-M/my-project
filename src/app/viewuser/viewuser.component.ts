import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router,ActivatedRoute } from '@angular/router';
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

  constructor(private api:ApiService , private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.regid=localStorage.getItem("userId");
   
        this.api.getByType("order",this.regid).subscribe(res=>{
          console.log(res);
          this.viewtable =res;
          this.viewtable=this.viewtable.docs;
          for(const i of this.viewtable){
            this.viewVal.push(i)
          }
      })  
      
  }

goBack(){
  this.route.navigate(['blog'])
}
}
