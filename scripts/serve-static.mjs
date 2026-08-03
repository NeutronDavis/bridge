import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const root=resolve("out");
const types={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json",".svg":"image/svg+xml",".xml":"application/xml",".txt":"text/plain; charset=utf-8",".ico":"image/x-icon"};
const config=JSON.parse(readFileSync(join(root,"staticwebapp.config.json"),"utf8"));
export const server=createServer((request,response)=>{
  for(const[name,value]of Object.entries(config.globalHeaders??{}))response.setHeader(name,String(value));
  if(request.method==="POST"&&request.url?.startsWith("/test-api/leads/")){response.writeHead(204);response.end();return}
  const url=new URL(request.url??"/","http://localhost");const decoded=decodeURIComponent(url.pathname);let path=normalize(join(root,decoded));
  if(!path.startsWith(root)){response.writeHead(400);response.end();return}
  if(existsSync(path)&&statSync(path).isDirectory())path=join(path,"index.html");
  if(!existsSync(path)){path=join(root,"404.html");response.statusCode=404}
  response.setHeader("Content-Type",types[extname(path)]??"application/octet-stream");response.end(readFileSync(path));
});
export function startStaticServer(){return new Promise((resolve,reject)=>{server.once("error",reject);server.listen(4173,"127.0.0.1",()=>{process.stdout.write("Static site listening on http://127.0.0.1:4173\n");resolve(server)})})}
for(const signal of ["SIGINT","SIGTERM"]){process.on(signal,()=>{server.closeAllConnections();server.close(()=>process.exit(0));setTimeout(()=>process.exit(0),250).unref()})}
if(process.argv[1]&&import.meta.url===new URL(process.argv[1],"file:").href)await startStaticServer();
