export class DocAppointment{

  _id: string;
  patientName: String;
  emailId: String;
  contactNumber:String;
  doctorName:String;
  dateofApp:String;
  timeofApp:String;

  constructor(patientName: String, emailId: String, contactNumber:String, doctorName:String, dateofApp:String, timeofApp:String){
    this.patientName = patientName;
    this.emailId = emailId;
    this.contactNumber = contactNumber;
    this.doctorName = doctorName;
    this.dateofApp = dateofApp;
    this.timeofApp= timeofApp;
  }
}


