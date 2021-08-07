import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TracingComponent } from './tracing/tracing.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';
import { DoctorInputComponent } from './doctor-input/doctor-input.component';
import { PatientInputFormComponent } from './patient-input-form/patient-input-form.component';
import { DoctorInputFormComponent } from './doctor-input-form/doctor-input-form.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { DocDashComponent } from './component/doc-dash/doc-dash.component';




import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AppComponent,
    TracingComponent,
    ProfileComponent,
    ResultsComponent,
    DoctorInputComponent,
    PatientInputFormComponent,
    DoctorInputFormComponent,
    LandingpageComponent,
    NavbarComponent,
    PageNotfoundComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    DocDashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    // FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
    
    GoogleMapsModule,
   
  ],
  // providers: [],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
