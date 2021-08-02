export class User {
    constructor(
      // firstname: string; 
      // lastname: string; 
      // contact: string; 
      // email: string; 
      // password: string,
      // retype_password: string, 
      private email: string,
      private token: string,
      private localId: string,
      private expirationDate: Date
    ) {}
  
    get expireDate() {
      return this.expirationDate;
    }
  
    get userToken() {
      return this.token;
    }

    // firstname: string; 
    // lastname: string; 
    // contact: string; 
    // email: string; 
    // password: string;
    // retype_password: string; 
  }