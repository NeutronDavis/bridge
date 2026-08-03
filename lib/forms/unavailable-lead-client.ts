import type{LeadSubmissionClient}from"./lead-submission-client";import type{LeadSubmission,SubmissionResult}from"./types";
export class UnavailableLeadSubmissionClient implements LeadSubmissionClient{async submit(submission:LeadSubmission):Promise<SubmissionResult>{void submission;return{ok:false,message:"Online enquiries are not currently available. Please try again later."}}}
