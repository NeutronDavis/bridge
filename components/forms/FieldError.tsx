export function FieldError({id,message}:{id:string;message?:string}){return message?<span className="field-error" id={id}>{message}</span>:null}
