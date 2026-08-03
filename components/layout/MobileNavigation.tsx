"use client";

import { StaticLink as Link } from "@/components/ui/StaticLink";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";

export function MobileNavigation(){
  const [open,setOpen]=useState(false); const button=useRef<HTMLButtonElement>(null);
  useEffect(()=>{ if(!open) return; const close=(event:KeyboardEvent)=>{if(event.key==="Escape"){setOpen(false);button.current?.focus();}}; document.addEventListener("keydown",close); return()=>document.removeEventListener("keydown",close);},[open]);
  return <div className="mobile-nav"><button ref={button} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}><span/><span/><span/><span className="sr-only">{open?"Close":"Open"} navigation</span></button>{open&&<div className="mobile-menu" id="mobile-menu"><nav aria-label="Mobile navigation">{siteConfig.navigation.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="button button--primary" href="/request-demo" onClick={()=>setOpen(false)}>Request a Demo</Link></nav></div>}</div>;
}
