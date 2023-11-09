import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { signupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './Customer-dashboard/Customer-dashboard.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { aboutComponent } from './about/about.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './book/book.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { SuccessComponent } from './success/success.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { PaymentComponent } from './payment/payment.component';
import { OtpComponent } from './otp/otp.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PmedicationComponent } from './pmedication/pmedication.component';
import { FilterPipe } from './filter.pipe';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { EComponent } from './e/e.component';
import { FComponent } from './f/f.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { PasswordMaskPipe } from './password-mask.pipe';
import { PatientReportComponent } from './patient-report/patient-report.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    aboutComponent,
    NavbarComponent,
    ContactUsComponent,
    ProfileComponent,
        MenuComponent,
        signupComponent,
        AdminDashboardComponent,
        CustomerDashboardComponent,
        ViewitemsComponent,
        ViewAppointmentComponent,
        BookComponent,
        EditProfileComponent,
        DoctorDetailsComponent,
        SuccessComponent,
        SearchFilterComponent,
        FeedbackFormComponent,
        PatientDashboardComponent,
        AddDoctorComponent,
        PaymentComponent,
        OtpComponent,
        PrescriptionComponent,
        PmedicationComponent,
        FilterPipe,
        AComponent,
        BComponent,
        CComponent,
        DComponent,
        EComponent,
        FComponent,
        ViewProfileComponent,
        PasswordMaskPipe,
        PatientReportComponent,
      
        
       
       
        
       
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
