import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationServiceService} from './component/location-service.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TracingComponent } from './tracing/tracing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PatientDashComponent } from './component/patient-dash/patient-dash.component';




// import { GoogleMapsModule } from '@angular/google-maps';

import { CommonModule } from '@angular/common';
// current location
import { AgmCoreModule } from '@agm/core';

import { MatCardModule } from '@angular/material/card';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { MapComponent } from './component/map/map.component';
import { ContactsComponent } from './component/contacts/contacts.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,

  
    TracingComponent,
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
    TracingComponent,
    DocDashComponent,
    PatientDashComponent,
    ContactsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // GoogleMapsModule,
    MatCardModule,
    MatGoogleMapsAutocompleteModule,
    HttpClientModule,

    CommonModule,

    BrowserAnimationsModule,
    AngularMaterialModule,
    // FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWTLpNCpgZ8M5TAv0ViEDT8LpbODG1bXI',
      // apiKey: 'AIzaSyCR3F6p0cBZEcfs1U2S4u5b0T76o4eDRwU',
      // libraries: ["places"],
   
    }),

    BrowserAnimationsModule
   
  ],
  providers: [LocationServiceService,
    authInterceptorProviders],
  bootstrap: [AppComponent],
    

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  
 }
