import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import {Doctor} from "./register-doctor";

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.scss']
})
export class RegisterDoctorComponent implements OnInit {

  response: any;
  fullName: String = "";
  doctorEmailId: string = "";
  localAddress: String = "";
  city: String = "";
  state: String = "";
  gender: String = "";
  speciality: String;
  contactNumber: string = "";
  doctorPassword: String = "";
  doctor: Doctor;
  options: any;
  confirmPassword: String = "";
  error: boolean = false;
  regexp: RegExp;
  constructor(private http: HttpClient, private _alert: AlertsService) { }

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
  isPassword(search: string): boolean {
    var serchfind:boolean
    var PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    this.regexp = new RegExp(PASSWORD_REGEXP);
    serchfind=this.regexp.test(search);
    console.log(serchfind)
    return serchfind;
  }

  isContactNumber(search: string): boolean {
    var serchfind: boolean
    var NUMBER_REGEXP = /^\+?\d{10}$/;

    this.regexp = new RegExp(NUMBER_REGEXP);

    serchfind = this.regexp.test(search);

    console.log(serchfind)
    return serchfind
  }


  register() {
    console.log("Date Value " + this.localAddress);
    console.log("Date Value " + this.doctorEmailId);
    console.log("Date Value " + this.speciality);
    console.log("Date Value " + this.fullName);
    console.log("Date Value " + this.state);
    console.log("Date Value " + this.city);
    console.log("Date Value " + this.contactNumber);
    console.log("Date Value " + this.doctorPassword);
    console.log("Date Value " + this.gender);
    console.log("Date Value " + this.confirmPassword);

    if (this.fullName === "" || this.doctorEmailId === "" || this.localAddress === "" || this.city === ""  || this.state === "" || this.contactNumber === "" || this.doctorPassword === "") {
      this.error = true;
    }
    else {
      if (this.doctorPassword === this.confirmPassword) {
        if (this.isEmail(this.doctorEmailId) === true) {
          if (this.isContactNumber(this.contactNumber) === true) {
              this.doctor = new Doctor(this.fullName, this.doctorEmailId, this.localAddress, this.city, this.state, this.gender, this.speciality,this.contactNumber, this.doctorPassword);
              this.http.post('http://localhost:3000/Doctor', this.doctor)
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
                  console.log(this.doctor)
                })
            } 
          else {
            const options = {
              overlay: true,
              overlayClickToClose: true,
              showCloseButton: true,
              duration: 5000
            };
            this.openAlert('error', 'Please enter valid contact Number', options);
          }
        } else {
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
  
//     const mailOptions = {
//         from: "LocDoc@gmail.com",
//         to: newUser.emailId,
//         subject: "Verify Email",
//         generateTextFromHTML: true,
//         html: "<a></a>"
//     };
//     // sendEmailForVerification(newUser).catch(console.error);
//     smtpTransport.sendMail(mailOptions, (error, response) => {
//         error ? console.log(error) : console.log(response);
//         smtpTransport.close();
//     });

//     userService.save(newUser)
//         .then(resolve)
//         .catch(renderErrorResponse(response));
// };

// const oauth2Client = new OAuth2(
//     "614562343340-qpilksdg4uvm44vghecnl5phjojbhcck.apps.googleusercontent.com", // ClientID
//     "0BX3pzDJy1fZC8dYwdSYWTAc", // Client Secret
//     "https://developers.google.com/oauthplayground" // Redirect URL
// );

// oauth2Client.setCredentials({
//     refresh_token: "1/iyag998ApgayU3HwKTMmepuCutOpu7ySRDqhx-aYnI8"
// });
// const tokens =   oauth2Client.refreshAccessToken();
// const accessToken = oauth2Client.getAccessToken();

// const smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         type: "OAuth2",
//         user: "locdocapp@gmail.com",
//         clientId: "614562343340-qpilksdg4uvm44vghecnl5phjojbhcck.apps.googleusercontent.com",
//         clientSecret: "0BX3pzDJy1fZC8dYwdSYWTAc",
//         refreshToken: "1/iyag998ApgayU3HwKTMmepuCutOpu7ySRDqhx-aYnI8",
//         accessToken: accessToken
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });
}
}

class Doctor {
  
  id?:String;
  fullName: String;
  doctorEmailId: String;
  localAddress: String;
  city: String;
  state: String;
  gender: String;
  contactNumber: String;
  doctorPassword: String;
  speciality: String;
    /**
     * @type {Object}
     */
  constructor(fullName: String, doctorEmailId: String, localAddress: String, city: String, state: String, gender: String, speciality: String,contactNumber: String, doctorPassword: String) {
    console.log("Const Value " + name);
    this.fullName = fullName,
      this.doctorEmailId = doctorEmailId,
      this.localAddress = localAddress,
      this.city = city,
      this.state = state,
      this.gender = gender,
      this.speciality = speciality,
      this.contactNumber = contactNumber,
      this.doctorPassword = doctorPassword;
  }
}


