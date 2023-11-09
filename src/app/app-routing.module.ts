import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { signupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './Customer-dashboard/Customer-dashboard.component'
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { aboutComponent } from './about/about.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { BookComponent } from './book/book.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { SuccessComponent } from './success/success.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { OtpComponent } from './otp/otp.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PmedicationComponent } from './pmedication/pmedication.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { EComponent } from './e/e.component';
import { FComponent } from './f/f.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PatientReportComponent } from './patient-report/patient-report.component';
const routes: Routes = [

  {path:"",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
   {path:"signup",component:signupComponent},
   {path:"customerDashboard",component:CustomerDashboardComponent},
   {path:"adminDashboard",component:AdminDashboardComponent},
   {path:"viewitems",component:ViewitemsComponent},
   {path:"ContactUs", component:ContactUsComponent},
   {path:"about", component:aboutComponent},
   {path:"ViewAppointment",component:ViewAppointmentComponent},
  {path:"book",component:BookComponent},
  {path:"doctordetails",component:DoctorDetailsComponent},
  {path:"success",component:SuccessComponent},
{path:"search-filter",component:SearchFilterComponent},
{path:"feedback-form",component:FeedbackFormComponent},
{path:"patient-dashboard",component:PatientDashboardComponent},
{path:"add-doctor",component:AddDoctorComponent},
{path:"menu",component:MenuComponent},
{path:"payment",component:PaymentComponent},
{path:"otp",component:OtpComponent},
{path:"prescription",component:PrescriptionComponent},
{path:"pmedication",component:PmedicationComponent},
{path:"a",component:AComponent},
{path:"b",component:BComponent},
{path:"c",component:CComponent},
{path:"d",component:DComponent},
{path:"e",component:EComponent},
{path:"f",component:FComponent},
{path:"view-profile",component:ViewProfileComponent},
{ path: 'edit-profile', component: EditProfileComponent },
{ path: 'edit-profile/:user_id', component: EditProfileComponent },
{path:'patient-report',component:PatientReportComponent}
,
{
  path: 'view-profile/:user_id',
  component: ViewProfileComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
