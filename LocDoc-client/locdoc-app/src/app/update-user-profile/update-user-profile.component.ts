import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from "@angular/router";
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import { User } from '../models/user';
import {UserService} from '../user.service';
import { Options } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.scss']
})
export class UpdateUserProfileComponent implements OnInit {
  emailId: String = "";
  jsonData: User;
  fullname: String = "";
  localAddress: String = "";
  city: String = "";
  state: String = "";
  gender: String = "";
  dateofBirth: Date;
  contactNumber: String = "";
  password: String = "";
  id: any;
  user:User;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private _alert: AlertsService,private UserService :UserService) { 
    this.route.queryParams.subscribe(params => {
      this.emailId = params["emailId"];
      // this.jsonData = params["user"];
    });
    console.log('email' +this.emailId);
    // console.log('email' +this.jsonData);
  }
  ngOnInit() {
    this.displayProfile();
    // this.updateProfile();
    
  }

  openAlert(type: AlertType, message: string, options: AlertSettings) {
    this._alert.create(type, message, options);
  }
displayProfile(){
   /**
       * @type {Object}
       */
    let user$ = this.UserService.getUser(this.emailId);
    user$.subscribe((data) =>{
      this.jsonData = data;
      // this.id= data.id
      this.fullname = data[0].fullname
      this.emailId = data[0].emailId;
      this.localAddress = data[0].localAddress;
      this.city = data[0].city;
      this.state = data[0].state;
      this.gender = data[0].gender;
      this.dateofBirth = data[0].dateofBirth;
      this.password = data[0].password;
      this.contactNumber = data[0].contactNumber;
      // console.log('id' +this.id);
      if (data[0] === undefined) {
        console.log("Undefine");
      }
})
}
updateProfile()
  {
     /**
       * @type {Object}
       */
    const obj={
      emailId:this.emailId,
      fullname:this.fullname,
      localAddress:this.localAddress,
      city:this.city,
      state:this.state,
      gender:this.gender,
      dateofBirth:this.dateofBirth,
      contactNumber:this.contactNumber,
      password:this.password

    }
  let user$=  this.UserService.updateUser(this.emailId, obj)
  user$.subscribe((data) =>{
    const options = {
      overlay: true,
      overlayClickToClose: true,
      showCloseButton: true,
      duration: 5000
    };
    console.log(data);
    console.log(this.emailId);
    this.openAlert('success', 'Account Updated Successfully', options);
    // this.emailId = data[0].emailId;

      // this.router.navigate(["updateUserProfile"]);
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
