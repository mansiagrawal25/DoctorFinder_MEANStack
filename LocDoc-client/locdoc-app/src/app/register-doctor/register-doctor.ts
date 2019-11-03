export class Doctor {
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
