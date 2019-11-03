import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailId: String = "";
  password: String = "";
  Login: login;
  options: any;
  error: boolean;
  invalidUser: boolean;
  userType: String = "";
  DoctorLogin: DoctorLogin;
  regexp: RegExp;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
   /**
       * @type {Object}
       */
  isPassword(search: string): boolean {
    var serchfind:boolean
    var PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    this.regexp = new RegExp(PASSWORD_REGEXP);
    serchfind=this.regexp.test(search);
    console.log(serchfind)
    return serchfind;
  }
login(){
this.Login = new login(this.emailId, this.password);
      this.options = {
        body: this.Login
      }
      this.http.post('http://localhost:3000/User/authenticate', this.Login)
        .subscribe((data) => {
          if (Object.keys(data).length === 0) {
            console.log("Hospital");
            this.DoctorLogin = new DoctorLogin(this.emailId, this.password);
            this.http.post('http://localhost:3000/Doctor/authenticate', this.DoctorLogin)
              .subscribe((data) => {
                console.log()
                if (data[0] === undefined) {
                  this.invalidUser = true;
                }
                else {
                  let navigationExtras: NavigationExtras = {
                    queryParams: {
                      "emailId": data[0].doctorEmailId,
                      // "hospitalZipCode": data[0].hospitalZipCode,
                    }
                  };
                  this.router.navigate(['/doctor-home'], navigationExtras);
                }
              })

          }
          else {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                "emailId": data[0].emailId,
              }
            };
            this.router.navigate(['/home'], navigationExtras);
          }
        })
    
  
      }
    }





class login {
  emailId: String;
  password: String;
  constructor(emailId: String, password: String) {
    this.emailId = emailId;
    this.password = password;
  }
}
class DoctorLogin {
  doctorEmailId: String;
  doctorPassword: String;
  constructor(doctorEmailId: String, doctorPassword: String) {
    this.doctorEmailId = doctorEmailId;
    this.doctorPassword = doctorPassword;
  }
}
