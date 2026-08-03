import type{LeadSubmission,SubmissionResult}from"./types";
export interface LeadSubmissionClient{submit(submission:LeadSubmission):Promise<SubmissionResult>}
