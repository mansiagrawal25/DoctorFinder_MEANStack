// importing packages and components
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.scss']
})
export class VerifyuserComponent implements OnInit {

  constructor(private http: HttpClient, matButtonModule: MatButtonModule) { }

  ngOnInit() {


  }


  verify(key) {
    console.log("inside verify");
    let obj1 = new obj(key);
    console.log("before post");
    console.log(this.http);
    console.log(this.http.post);
    this.http.post('http://localhost:3000/verify', obj1).subscribe((data) => {

      console.log("Inside subscribe");
      console.log(data);

      alert("verified");

    });

  }


} 
/**
* @type {Object}
*/
class obj {
  seckey: string;
  constructor(key: string) {
    this.seckey = key;
  }
}
