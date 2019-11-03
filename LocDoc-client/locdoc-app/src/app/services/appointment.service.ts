import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {Booking} from '../appointment/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }


  public getDoctorsList(): Observable<any> {
    return this.http.get<Booking>('http://localhost:3000/Doctor');
  }
}
