import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// import {DoctorDetails} from "../doctor-search/doctorSearch";
import {DocAppointment} from "../doctor-home/doctor-home";
import { Doctor } from '../models/doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorHomeService {

  URL='http://localhost:3000/Booking/';

  constructor(private http: HttpClient) {

  }
  // Observer = new BehaviorSubject(this.DoctorList);

  getAppointmentList(doctorName:String): Observable<Array<DocAppointment>> {
    console.log('http://localhost:3000/Booking/applist/' + doctorName);
    return this.http.get<Array<DocAppointment>>('http://localhost:3000/Booking/applist/' + doctorName);
  }
  getDoctor(doctorEmailId : String): Observable<Doctor> {
    console.log('http://localhost:3000/Booking/' + doctorEmailId);
    return this.http.get<Doctor>( 'http://localhost:3000/Doctor/' + doctorEmailId);
    console.log('http://localhost:3000/Booking/' + Doctor);
  }
  deleteAppointment(id: string): Observable<any> {
    console.log('http://localhost:3000/Booking/'+id);
    return this.http.delete(this.URL+id);
    // console.log('http://localhost:3000/Booking/' + id);

  }

}

