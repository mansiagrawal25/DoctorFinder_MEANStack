// importing components and packages
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { from } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {DoctorHomeComponent} from './doctor-home/doctor-home.component';
import {DoctorSearchComponent} from './doctor-search/doctor-search.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import {ViewAppointmentComponent} from "./view-appointment/view-appointment.component";
import {VerifyuserComponent} from "./verifyuser/verifyuser.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    { path: 'registerUser', component: RegisterUserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'registerDoctor', component: RegisterDoctorComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: 'doctor-home', component: DoctorHomeComponent },
    {path: 'doctorsearch', component: DoctorSearchComponent },
    {path: 'updateUserProfile', component: UpdateUserProfileComponent },
    {path: 'view-appointments', component:ViewAppointmentComponent},
    {path: 'verify', component:VerifyuserComponent}

  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
