import { BrowserModule } from '@angular/platform-browser';
import { Component, forwardRef, NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserReviewComponent } from './user-review/user-review.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { FooterComponent } from './footer/footer.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { HttpClientModule} from '@angular/common/http';
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
import { PurchasedetailComponent } from './purchasedetail/purchasedetail.component';
import { BookinginfoComponent } from './bookinginfo/bookinginfo.component';



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
  {path:'purchase',component:PurchasedetailComponent},
  {path:'bookinfo',component:BookinginfoComponent}

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
    PurchasedetailComponent,
    BookinginfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
