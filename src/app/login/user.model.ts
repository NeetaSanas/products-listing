export class User {
    constructor(
      // firstname: string; 
      // lastname: string; 
      // contact: string; 
      // email: string; 
      // password: string,
      // retype_password: string, 
      
      public email: string,
      public token: string,
      public localId: string,
      public expirationDate: Date,
      //public id?:string,
    ) {}
  
    get expireDate() {
      return this.expirationDate;
    }
  
    get userToken() {
      return this.token;
    }

    id: string;
    firstname: string; 
    lastname: string; 
    contact: string; 
    //email: string; 
    password: string;
    retype_password: string; 
  }