import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {DoctorSearchService} from '../services/doctor-search.service';
import {DoctorDetails} from '../doctor-search/doctorSearch';
import {SearchPipe} from '../search.pipe';


@Component({
  selector: 'app-doctor-search',
  templateUrl: './doctor-search.component.html',
  styleUrls: ['./doctor-search.component.scss'],
  // providers: [DoctorSearchService]
})
export class DoctorSearchComponent implements OnInit {

 docdetails: DoctorDetails[];
  searchterms = '';
  constructor(private doctorSearchService: DoctorSearchService) {}

  ngOnInit() {
    this.getDocList();
  }

  getDocList() {
    this.doctorSearchService.getDocList()
  .subscribe(docdetails => this.docdetails = docdetails);
  }


}
