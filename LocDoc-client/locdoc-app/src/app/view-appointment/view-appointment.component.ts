// importing compnents and packages
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';  
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import {User} from "../models/user";
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {UserAppointment} from "./user-appointment";
import { Router, NavigationExtras } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {
  emailId: String;
  fullname: String = "";
  localAddress: String = "";
  city: String = "";
  state: String = "";
  gender: String = "";
  dateofBirth: Date;
  contactNumber: String = "";
  password: String = "";
  jsonData: any;
  user :User;
  View: String;
  show: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private _alert: AlertsService,private UserService :UserService) {
    this.route.queryParams.subscribe(params => {
      this.emailId = params["emailId"];
    });
    console.log('email' +this.emailId);
  }

  userappointment:UserAppointment[];
  ngOnInit() {

    this.UserAppointmentList();
  }


  UserAppointmentList() {
    console.log('email' + this.emailId);
    let userappointlist$: Observable<Array<UserAppointment>> = this.UserService.UserAppointmentList(this.emailId);
    userappointlist$.subscribe(userappointment => {this.userappointment = userappointment;
      // userappointment[0]._id=this.id;
      for(let i=0;i<userappointment.length;i++){
        console.log(userappointment[i]._id)
      }

    }
      
      );
      
    
  }

  deleteAppointment(userapp: UserAppointment){
    let userappointment = this.userappointment;
    return this.UserService.deleteAppointment(userapp._id)
      .subscribe(data => {

        console.log(data);
        this.UserAppointmentList();
      });
  }
  updateApp(userapp: UserAppointment)
  {
    // userapp._id=this.id;
    console.log("step 1");
    console.log(userapp._id);
    // userapp.dateofApp=this.dateofApp;
// update(){
    const obj={
      // id:this.id,
      // patientEmailId:this.emailId,
      //  fullname:this.fullname,
      // id:userapp._id,
      patientName: userapp.patientName,
      patientEmailId: userapp.patientEmailId,
      contactNumber:userapp.contactNumber,
      doctorName : userapp.doctorName,
      dateofApp : userapp.dateofApp,
      timeofApp : userapp.dateofApp,
      
      
      
      
    }
    console.log(userapp._id);
    console.log(obj);
  let app$=  this.UserService.updateApp(userapp._id, obj)
  app$.subscribe((data) =>{
  //   const options = {
  //     overlay: true,
  //     overlayClickToClose: true,
  //     showCloseButton: true,
  //     duration: 5000
  //   };
    console.log(data);
  //   // console.log(this.emailId);
  //   // this.openAlert('success', 'Account Updated Successfully', options);
  //   // this.emailId = data[0].emailId;

  //     // this.router.navigate(["updateUserProfile"]);
  }, response => {
      alert("error: " + response.error.message)
  })
}
userHome(){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      "emailId": this.emailId,
    }
    
  }
  console.log('gg'+this.emailId);
  this.router.navigate(['/home'], navigationExtras);
}

 }
