import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Planned-Maintainence-System';
  

  constructor(private route:Router) {
 const  userid =  localStorage.getItem('userId') 
 const role = localStorage.getItem('role');
    if(userid == null && userid==undefined) {
      this.route.navigate(['/']);
    }
    else{
      if(role=="user"){
        this.route.navigate(['blog'])
      }
      else if(role=="admin"){
        this.route.navigate(['adminviewproduct'])
      }
    }
  }
}
