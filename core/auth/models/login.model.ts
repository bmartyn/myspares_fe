export class LoginModel {
  public emailId: any;
  public password: any;
  public type: string;
  constructor(loginRequest: any) {
    this.emailId = loginRequest.email || '';
    this.password = loginRequest.password || '';
    this.type = loginRequest.type || '';
  }
}
