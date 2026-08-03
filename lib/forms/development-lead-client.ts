import type{LeadSubmissionClient}from"./lead-submission-client";import type{LeadSubmission,SubmissionResult}from"./types";
export class DevelopmentLeadSubmissionClient implements LeadSubmissionClient{async submit(submission:LeadSubmission):Promise<SubmissionResult>{void submission;await new Promise(resolve=>setTimeout(resolve,250));return{ok:true}}}
