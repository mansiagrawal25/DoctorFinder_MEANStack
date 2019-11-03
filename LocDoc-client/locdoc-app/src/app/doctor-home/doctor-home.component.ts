import { Component, OnInit } from '@angular/core';
import {DoctorHomeService} from "../services/doctor-home.service";
import {DoctorDetails} from "../doctor-search/doctorSearch";
import {DocAppointment} from "./doctor-home";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from "@angular/router";
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import { Doctor } from '../models/doctor';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.scss'],
  // providers:[DoctorHomeService]
})
export class DoctorHomeComponent implements OnInit {
  /**
   * @access private
   */
  fullName: String;
  doctorEmailId: String;
  doctorName:String;
  jsonData: any;
  doctor: Doctor;
  
  contactNumber:String;
  patientName:string;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private _alert: AlertsService,private doctorHomeService: DoctorHomeService) { 
    this.route.queryParams.subscribe(params => {
      /**
       * @type {String}
       */
      this.doctorEmailId = params["emailId"];
    }); 
    /**
    * @type {String}
    */
    this.route.queryParams.subscribe(params => {
      this.doctorName = params["doctorName"];
    });
    console.log('email' +this.doctorEmailId);
    console.log('doctorName'+ this.doctorName);
    if(this.doctorName === this.doctorEmailId){
      this.getAppointmentList();

    }
    else {
      console.log('no Appointment')
    }
  }
    /**
     * @type {number}
     */
  docAppdetails: DocAppointment[];
  ngOnInit() {
    this.getAppointmentList();
this.Pullcontact();
  }

  getAppointmentList() {
console.log('email' + this.doctorEmailId);
    let appointlist$: Observable<Array<DocAppointment>> = this.doctorHomeService.getAppointmentList(this.doctorEmailId);
    appointlist$.subscribe(docAppdetails => this.docAppdetails = docAppdetails);
    // console.log(this.docAppdetails);
    
    // this.doctorHomeService.getAppointmentList()
    //   .subscribe(docAppdetails => this.docAppdetails = docAppdetails);
  }
/**
 * @params
 */
  Pullcontact(){
    console.log('email' +this.doctorEmailId);
    /**
     * @type {email} */

    let doctor$ = this.doctorHomeService.getDoctor(this.doctorEmailId);
    doctor$.subscribe((data) =>{
      this.jsonData = data;
      /**
       * @property {string} this.fullname

       */
      console.log("Undefine" +data);
      this.fullName = data[0].fullName;
      // this.doctorEmailId = data.doctorEmailId;
      console.log('name ' + this.fullName);
      console.log('name ' + this.doctorEmailId);
      if (data[0] === undefined) {
        console.log("Undefine");
      }
})
  }

  // function to delete Contacts from frontend
/**
 * @param {Object} app
 */
  deleteAppointment(app: DocAppointment){
    let docAppdetails = this.docAppdetails;
    return this.doctorHomeService.deleteAppointment(app._id)
      .subscribe(data => {
        
        console.log(data);
        this.getAppointmentList();
      });
  }

  
}
