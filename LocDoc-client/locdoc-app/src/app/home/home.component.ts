// importing components and packages
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from "@angular/router";
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import { User } from '../models/user';
import {UserService} from '../user.service';
import { ConfirmationService } from '@jaspero/ng2-confirmations';
import { ResolveEmit } from '../interfaces/ResolveEmit';
import { ConfirmSettings } from '../interfaces/confirmSetting';
import {Observable} from "rxjs";
import {UserAppointment} from "../view-appointment/user-appointment";
import {DocAppointment} from "../doctor-home/doctor-home";
import {DoctorSearchComponent} from '../doctor-search/doctor-search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
     * @type {String}
     */

id:string;

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
  dateofApp:String;
  timeofApp:String;
  doctorName:String;
  patientName:String;
settings: ConfirmSettings | any = {
  overlay: true,
  overlayClickToClose: true,
  // showCloseButton: true,
  confirmText: 'Yes',
  declineText: 'No'
};
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private _alert: AlertsService,private UserService :UserService,private _confirmation: ConfirmationService) { 
    this.route.queryParams.subscribe(params => {
       /**
       * @type {Object}
       */
      this.emailId = params["emailId"];
    });
    console.log('email' +this.emailId);
    
  }

  updateProfilePage()
  {
    let navigationExtras: NavigationExtras = {
        /**
     * @type {Object}
     */
      queryParams: {
        "emailId": this.emailId,
        "fullname": this.fullname,
        "localAddress" : this.localAddress,
        "city" : this.city,
        "state": this.state,
        "gender" : this.gender,
        "password" : this.password,

        "user" : this.jsonData,
      }
    }
    this.router.navigate(['/updateUserProfile'], navigationExtras);
  }


  userappointment:UserAppointment[];
  ngOnInit() {
    this.UserAppointmentList();
  }
  viewProfile(){
     /**
       * @type {Object}
       */
    this.show=true;
    let user$ = this.UserService.getUser(this.emailId);
    console.log('email' +this.emailId);
      /**
     * @type {numbObjecter}
     */
    user$.subscribe((data) =>{
      this.jsonData = data;
      this.fullname = data[0].fullname
      this.emailId = data[0].emailId;
      this.localAddress = data[0].localAddress;
      this.city = data[0].city;
      this.state = data[0].state;
      this.gender = data[0].gender;
      this.dateofBirth = data[0].dateofBirth;
      this.password = data[0].password;
      this.contactNumber = data[0].contactNumber;

      if (data[0] === undefined) {
        console.log("Undefine");
      }
    })
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

  deleteProfile(){
     /**
       * @type {String}
       */
    let user$ = this.UserService.deleteUser(this.emailId);
    user$.subscribe(result => {
      console.log(result);
      this.router.navigate(['/login']);
    }, error => console.log('There was an error: ', error));

  }
  onClick() {
    this._confirmation.create( '', 'Are you sure you want to Delete profile', this.settings)
        .subscribe((ans: ResolveEmit) => {
          if (ans.resolved == true) {

            this.deleteProfile();
             console.log('accepted button clicked');
          } else {
            console.log('decline button clicked');
          }
        });

 }


  deleteAppointment(userapp: UserAppointment){
     /**
       * @type {Object}
       */
    let userappointment = this.userappointment;
    return this.UserService.deleteAppointment(userapp._id)
      .subscribe(data => {

        console.log(data);
        this.UserAppointmentList();
      });
  }



  // Appointment(userapp: UserAppointment){
  //   let userappointment = this.userappointment;
  //   return this.UserService.Appointment(userapp._id)
  //     .subscribe(data => {

  //       console.log(data);
  //       this.UserAppointmentList();
  //     });
  // }
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
  // }
  viewAppointment(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "emailId": this.emailId,
      }
      
    }
    console.log('gg'+this.emailId);
    this.router.navigate(['/view-appointments'], navigationExtras);
  }
}
