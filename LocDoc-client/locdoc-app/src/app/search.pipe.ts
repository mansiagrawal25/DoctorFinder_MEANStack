import { Pipe, PipeTransform } from '@angular/core';
import {DoctorDetails} from "./doctor-search/doctorSearch";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(DoctorDetails: Array<DoctorDetails>, searchterms: String): any {
   if(searchterms == null){
     return DoctorDetails;
   }

   var results = [];
   for (let entry of DoctorDetails) {
     if(entry.fullName.toLowerCase().includes(searchterms.toLowerCase())|| entry.speciality.toLowerCase().includes(searchterms.toLowerCase()))
     {
       results.push(entry)
     }
   }
   return results;
  }

}


