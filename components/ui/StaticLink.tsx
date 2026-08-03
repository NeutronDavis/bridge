import type{AnchorHTMLAttributes}from"react";
export function StaticLink({href,...props}:AnchorHTMLAttributes<HTMLAnchorElement>&{href:string}){return <a href={href} {...props}/>}
