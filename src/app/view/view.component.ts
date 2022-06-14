import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  temp: any;
  product: any;

  constructor(private acroute:ActivatedRoute,private route:Router,private api:ApiService) { }

  ngOnInit(): void {
   
    this.acroute.queryParams.subscribe(res=>{
      this.temp=res.data
     
      this.api.getById("freshers_sample/",this.temp).subscribe(response=>{
        
        this.temp=response;
        console.log(response);
        this.api.getById("freshers_sample/",this.temp.product).subscribe(data=>{
        console.log(data)
        this.product=data
        this.product=this.product.addproduct
        this.temp['product']=this.product
        console.log(this.product)
           });
        
      },rej=>{
        console.log(rej)
      })
     
    })

  }
   back(){
    this.route.navigate(['viewuser'])
   }
}
