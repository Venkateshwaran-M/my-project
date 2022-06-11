import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  temp: any;

  constructor(private acroute:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.acroute.queryParams.subscribe(res=>{
      this.temp=res.data
      this.api.getById("freshers_sample/",this.temp).subscribe(res=>{
        this.temp=res
        console.log(this.temp)
      })
    })
    
  }
   
}
