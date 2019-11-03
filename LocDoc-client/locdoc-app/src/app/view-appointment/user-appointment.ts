export class UserAppointment{
  _id: string;
  patientName: String;
  patientEmailId: String;
  contactNumber:String;
  doctorName:String;
  dateofApp:String;
  timeofApp:String;


     /**
     * @type {Object}
     */
   

  constructor(id:string,patientName: String, patientEmailId: String, contactNumber:String, doctorName:String, dateofApp:String, timeofApp:String){
    this.patientName = patientName;

    this.patientEmailId = patientEmailId;
    this.contactNumber = contactNumber;
    this.doctorName = doctorName;
    this.dateofApp = dateofApp;
    this.timeofApp= timeofApp;
    this._id=id;
  }
}


