export class EnquiryModel {
  public name: string;
  public email: string;
  public mobile: number;
  public comments: string;
  public serviceId: number;

  constructor(enquiry: any) {
    this.name = enquiry.name || '';
    this.email = enquiry.email || '';
    this.mobile = enquiry.mobile || 0;
    this.comments = enquiry.comments || '';
    this.serviceId = enquiry.serviceId || '';
  }
}
