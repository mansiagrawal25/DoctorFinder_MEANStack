// importing components and packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './core/material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AppointmentComponent } from './appointment/appointment.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import {DoctorSearchComponent} from './doctor-search/doctor-search.component';
import {SearchPipe} from './search.pipe';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import {JasperoConfirmationsModule} from '@jaspero/ng2-confirmations';
import {MatButtonModule} from '@angular/material/button';
import {ViewAppointmentComponent} from './view-appointment/view-appointment.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { VerifyuserComponent } from './verifyuser/verifyuser.component';
import {MatSnackBarModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUserComponent,
    AppointmentComponent,
    RegisterDoctorComponent,
    DoctorSearchComponent,
    SearchPipe,
    DoctorHomeComponent,
    UpdateUserProfileComponent,
    ViewAppointmentComponent,
    VerifyuserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    OwlDateTimeModule,
    ReactiveFormsModule,
    OwlNativeDateTimeModule,
    JasperoAlertsModule,
    AngularFontAwesomeModule,
    JasperoConfirmationsModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [],
  entryComponents: [RegisterUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
