import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import { User } from '../models/user';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  response: any;
  fullname: String = "";
  emailId: string = "";
  localAddress: String = "";
  city: String = "";
  state: String = "";
  gender: String = "";
  dateofBirth: Date;
  contactNumber: string = "";
  password: String = "";
  user: User;
  options: any;
  confirmPassword: String = "";
  error: boolean = false;
  regexp: RegExp;

  constructor(private http: HttpClient, private _alert: AlertsService,) { }

  ngOnInit() {
  }
  
  openAlert(type: AlertType, message: string, options: AlertSettings) {
    this._alert.create(type, message, options);
  }

  isEmail(search: string): boolean {
    var serchfind: boolean
    var EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    this.regexp = new RegExp(EMAIL_REGEXP);

    serchfind = this.regexp.test(search);

    console.log(serchfind)
    return serchfind
  }

  isContactNumber(search: string): boolean {
    var serchfind: boolean
    var NUMBER_REGEXP = /^\+?\d{10}$/;

    this.regexp = new RegExp(NUMBER_REGEXP);

    serchfind = this.regexp.test(search);

    console.log(serchfind)
    return serchfind
  }
  isPassword(search: string): boolean {
    var serchfind:boolean
    var PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    this.regexp = new RegExp(PASSWORD_REGEXP);
    serchfind=this.regexp.test(search);
    console.log(serchfind)
    return serchfind;
  }


  register() {
    console.log("Date Value " + this.localAddress);
    console.log("Date Value " + this.emailId);
    console.log("Date Value " + this.dateofBirth);
    console.log("Date Value " + this.fullname);
    console.log("Date Value " + this.state);
    console.log("Date Value " + this.city);
    console.log("Date Value " + this.contactNumber);
    console.log("Date Value " + this.password);
    console.log("Date Value " + this.gender);
    console.log("Date Value " + this.confirmPassword);

    if (this.fullname === "" || this.emailId === "" || this.localAddress === "" || this.city === ""  || this.state === "" || this.contactNumber === "" || this.password === "") {
      this.error = true;
    }
    else {
      if (this.password === this.confirmPassword) {
        if (this.isEmail(this.emailId) === true) {
          if (this.isContactNumber(this.contactNumber) === true) {
              this.user = new User(this.fullname, this.emailId, this.localAddress, this.city, this.state, this.gender, this.dateofBirth,this.contactNumber, this.password);
              this.http.post('http://localhost:3000/User', this.user)
                .subscribe(() => {
                  const options = {
                    overlay: true,
                    overlayClickToClose: true,
                    showCloseButton: true,
                    duration: 5000
                  };
                  this.openAlert('success', 'Account Created Successfully', options);
                  let textFields = document.getElementsByTagName("input");
                  for (let i = 0; i < textFields.length; i++) {
                    textFields[i].value = "";
                  }
                  this.error = false;
                  console.log(this.user)
                })
            } 
          else {
             /**
       * @type {Object}
       */
            const options = {
              overlay: true,
              overlayClickToClose: true,
              showCloseButton: true,
              duration: 5000
            };
            this.openAlert('error', 'Please enter valid contact Number', options);
          }
        } else {
           /**
       * @type {Object}
       */
          const options = {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            duration: 5000
          };
          this.openAlert('error', 'Email Id is not valid', options);
        }
      
    }
  }
}}
// class User {
//   id?:String;
//   fullname: String;
//   emailId: String;
//   localAddress: String;
//   city: String;
//   state: String;
//   gender: String;
//   dateofBirth: Date;
//   contactNumber: String;
//   password: String;
//   constructor(fullname: String, emailId: String, localAddress: String, city: String, state: String, gender: String, dateofBirth: Date,contactNumber: String, password: String) {
//     console.log("Const Value " + name);
//     this.fullname = fullname,
//       this.emailId = emailId,
//       this.localAddress = localAddress,
//       this.city = city,
//       this.state = state,
//       this.gender = gender,
//       this.dateofBirth = dateofBirth,
//       this.contactNumber = contactNumber,
//       this.password = password;
//   }
// }



