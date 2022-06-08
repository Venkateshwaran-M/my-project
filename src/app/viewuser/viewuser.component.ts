import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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
    // this.router.queryParams.subscribe(params => {
    //   console.log(params); 
    //   this.obj=params;
      // this.api.getById("freshers_sample/",this.regid).subscribe(res=>{
        // console.log(res);
        this.api.getByType("order",this.regid).subscribe(res=>{
          console.log(res);
          this.viewtable =res;
          this.viewtable=this.viewtable.docs;
          for(const i of this.viewtable){
            this.viewVal.push(i)
          }

      })

        // console.log(res);
        // console.log(this.obj.productid)

    //     this.viewtable=res;
    //     this.sample=this.viewtable.docs;
    //  this.viewtable.docs.map((x:any)=>{
    //   console.log(x)
    //   this.viewVal.push(x)
    //  })
    //  console.log(this.viewVal)
     
      // })
    // }
  // );



  
  }
deleteBooking(id:any,rev:any){
  this.api.deleteData(id,rev).subscribe((data)=>{
    console.log(data);
    alert('Data deleted');
   window.location.reload();
   })
}
goBack(){
  this.route.navigate(['blog'])
}
}
