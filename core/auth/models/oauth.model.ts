export class OauthModel {
  public emailId: any;
  public url: any;
  public oAuthData: string;
  constructor(oauthRequest: any) {
    this.url = oauthRequest.url || '';
    this.emailId = oauthRequest.email || '';
    this.oAuthData = oauthRequest.oAuthData || '';
  }
}
