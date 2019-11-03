//importing components and packages
import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {  BehaviorSubject } from 'rxjs/Rx';
import 'rxjs';
import {Observer} from "indefinite-observable";
import {Observable} from "rxjs";
import {DoctorDetails} from "../doctor-search/doctorSearch";


@Injectable({
  providedIn: 'root'
})
export class DoctorSearchService {

  // DoctorList=[];

  constructor(private http: HttpClient) {

  }
  // Observer = new BehaviorSubject(this.DoctorList);

  getDocList(): Observable<Array<DoctorDetails>>{
    return this.http.get<Array<DoctorDetails>>('http://localhost:3000/Doctor');
  }
}
