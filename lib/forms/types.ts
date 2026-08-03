export type ContactSubmission={kind:"contact";fullName:string;email:string;company?:string;enquiryType:string;message:string;website?:string};
export type DemoSubmission={kind:"demo";fullName:string;company:string;workEmail:string;phone:string;industry:string;organisationSize:string;areasOfInterest:string[];message?:string;consentToContact:boolean;website?:string};
export type LeadSubmission=ContactSubmission|DemoSubmission;
export type SubmissionResult={ok:true}|{ok:false;message:string};
