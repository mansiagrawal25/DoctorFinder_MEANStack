// importing modules
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import {AppointmentService} from '../services/appointment.service';
import {Booking} from './appointment';
import{Doctor} from "../register-doctor/register-doctor";


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  providers:[AppointmentService]
})
export class AppointmentComponent implements OnInit {

  bookings: Booking[];
  doctors: Doctor[];
  patientName: String;
  patientEmailId: String;
  contactNumber: Number;
  doctorName: String;
  uniqueDocID:String;
  dateofApp: Date;
  timeofApp: String;

// constructor definition

  constructor(private http: HttpClient, private _alert: AlertsService, private appointservice: AppointmentService) { }

  ngOnInit() {
    this.getDoctorsList();
  }
  openAlert(type: AlertType, message: string, options: AlertSettings) {
    this._alert.create(type, message, options);
  }
  // POST new appointment  booking to Database
  bookAppointment(){
  /**
   * New booking object
     * @type {Object}
     */
    const newBooking = {
      patientName: this.patientName,
      patientEmailId: this.patientEmailId,
      contactNumber: this.contactNumber,
      doctorName: this.doctorName,
      uniqueDocID:this.uniqueDocID,
      dateofApp: this.dateofApp,
      timeofApp: this.timeofApp
    }
    return this.http.post('http://localhost:3000/Booking', newBooking)
      .subscribe(() => {
        const options = {
          overlay: true,
          overlayClickToClose: true,
          showCloseButton: true,
          duration: 5000
        };
        console.log(newBooking)
        this.openAlert('success', 'Booking Completed Successfully', options);
      })

  }
// retrieve doctors list
  getDoctorsList(){
    this.appointservice.getDoctorsList()
      .subscribe(bookings => this.bookings = bookings);
  }
}


