import { spawnSync } from "node:child_process";
const command=process.platform==="win32"?"npm.cmd":"npm";
const result=spawnSync(command,["run","build"],{stdio:"inherit",shell:process.platform==="win32",env:{...process.env,NEXT_PUBLIC_SITE_URL:"http://127.0.0.1:4173",NEXT_PUBLIC_LEAD_API_BASE_URL:"http://127.0.0.1:4173/test-api"}});
process.exit(result.status??1);
