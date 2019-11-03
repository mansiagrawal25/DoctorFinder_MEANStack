// importing components and packages
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Services } from '@angular/core/src/view';

import { Observable } from 'rxjs';
import { User } from './models/user';
import { DocAppointment } from './doctor-home/doctor-home';
import {UserAppointment} from "./view-appointment/user-appointment";
import { Booking } from './appointment/appointment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = "http://localhost:3000/User/";

  constructor(private http: HttpClient) { }

  getUser(email : String): Observable<User> {
    return this.http.get<User>(this.URL + email);
  }
  // updateUser(email : String): Observable<User>{
  //   return this.http.put<User>(this.URL  +email ,User);
  // }
  updateUser(emailId,user): Observable<User>{
    
    return this.http.put<User>(this.URL+ emailId, user);
    console.log('user' +user);

  }

  deleteUser(emailId) :Observable<User>{
    return this.http.delete<User>(this.URL+ emailId);
  }


  UserAppointmentList(patientEmailId:String): Observable<Array<UserAppointment>> {
    console.log('http://localhost:3000/Booking/' + patientEmailId);
    return this.http.get<Array<UserAppointment>>('http://localhost:3000/Booking/' + patientEmailId);
  }

  deleteAppointment(id: string): Observable<any> {
    console.log('http://localhost:3000/Booking/'+id);
    return this.http.delete('http://localhost:3000/Booking/'+id);
    // console.log('http://localhost:3000/Booking/' + id);

  }
  updateApp(id ,user): Observable<DocAppointment>{
    console.log('http://localhost:3000/Booking/'+id);
    return this.http.put<DocAppointment>('http://localhost:3000/Booking/'+ id, user);
    
  }

}
