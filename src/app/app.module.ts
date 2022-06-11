import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { FooterComponent } from './footer/footer.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ShipmanagementsystemComponent } from './shipmanagementsystem/shipmanagementsystem.component';
import { CrewmanagmentComponent } from './crewmanagment/crewmanagment.component';
import { ShipinventoryComponent } from './shipinventory/shipinventory.component';
import { VesselperformanceComponent } from './vesselperformance/vesselperformance.component';
import { ShipdocumentComponent } from './shipdocument/shipdocument.component';
import { RegisterComponent } from './register/register.component';
import { FeedbacktableComponent } from './feedbacktable/feedbacktable.component';
import { StoresComponent } from './stores/stores.component';
import { AdminComponent } from './admin/admin.component';
import { HttpCallInterceptor } from 'src/interceptor';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AddProductComponent } from './addproduct/addproduct.component';
import { UserbookedstatusComponent } from './userbookedstatus/userbookedstatus.component';
import { DemorequestComponent } from './demorequest/demorequest.component';
import { StorecontactdetailsComponent } from './storecontactdetails/storecontactdetails.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AdminviewproductComponent } from './adminviewproduct/adminviewproduct.component';
import { RegusersComponent } from './regusers/regusers.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'user-review',component:UserReviewComponent},
  {path:'careers',component:CareersComponent},
  {path:'blog',component:BlogComponent},
  {path:'case-studies',component:CasestudiesComponent},
  {path:'shipmanagement',component:ShipmanagementsystemComponent},
  {path:'log-in',component:LoginComponent},
  {path:'crew',component:CrewmanagmentComponent},
  {path:'inventory',component:ShipinventoryComponent},
  {path:'vessel',component:VesselperformanceComponent},
  {path:'document',component:ShipdocumentComponent},
  {path:'register',component:RegisterComponent},
  {path:'feedback',component:FeedbacktableComponent},
  {path:'stores',component:StoresComponent},
  {path:'admin',component:AdminComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'userbookedstatus',component:UserbookedstatusComponent},
  {path:'Demouser',component:DemorequestComponent},
  {path:'usercontactdetails',component:StorecontactdetailsComponent},
  {path:'viewuser',component:ViewuserComponent},
  {path:'adminviewproduct',component:AdminviewproductComponent},
  {path:'regusers',component:RegusersComponent},
  {path:'view',component:ViewComponent},
  {path:'edit',component:EditComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ContactComponent,
    UserReviewComponent,
    BlogComponent,
    CareersComponent,
    FooterComponent,
    CasestudiesComponent,
    LoginComponent,
    ShipmanagementsystemComponent,
    CrewmanagmentComponent,
    ShipinventoryComponent,
    VesselperformanceComponent,
    ShipdocumentComponent,
    RegisterComponent,
    FeedbacktableComponent,
    StoresComponent,
    AdminComponent,
    AddProductComponent,
    UserbookedstatusComponent,
    DemorequestComponent,
    StorecontactdetailsComponent,
    ViewuserComponent,
    AdminviewproductComponent,
    RegusersComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule,
     RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCallInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
