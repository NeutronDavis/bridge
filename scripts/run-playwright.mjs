import { spawn } from "node:child_process";
import { server, startStaticServer } from "./serve-static.mjs";

await startStaticServer();
const cli=new URL("../node_modules/@playwright/test/cli.js",import.meta.url);
const cliPath=decodeURIComponent(cli.pathname.slice(process.platform==="win32"?1:0));
const child=spawn(process.execPath,[cliPath,"test",...process.argv.slice(2)],{
  env:{...process.env,PLAYWRIGHT_EXTERNAL_SERVER:"1"},stdio:"inherit"
});
const exitCode=await new Promise(resolve=>child.once("exit",code=>resolve(code??1)));
server.closeAllConnections();
await new Promise(resolve=>server.close(resolve));
process.exit(exitCode);
