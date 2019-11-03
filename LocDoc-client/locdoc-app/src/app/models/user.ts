export  class User {
        id?:String;
        fullname: String;
        emailId: String;
        localAddress: String;
        city: String;
        state: String;
        gender: String;
        dateofBirth: Date;
        contactNumber: String;
        password: String;
        constructor(fullname: String, emailId: String, localAddress: String, city: String, state: String, gender: String, dateofBirth: Date,contactNumber: String, password: String) {
          console.log("Const Value " + name);
          this.fullname = fullname,
            this.emailId = emailId,
            this.localAddress = localAddress,
            this.city = city,
            this.state = state,
            this.gender = gender,
            this.dateofBirth = dateofBirth,
            this.contactNumber = contactNumber,
            this.password = password;
        }
      }
      
      
      
      