import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const out = resolve("out");
const html = [];
function walk(directory) { for (const name of readdirSync(directory)) { const path = join(directory, name); if (statSync(path).isDirectory()) walk(path); else if (path.endsWith(".html")) html.push(path); } }
walk(out);

const hashes = new Set();
for (const file of html) {
  const source = readFileSync(file, "utf8");
  if (/<style(?:\s|>)/i.test(source) || /\sstyle="/i.test(source)) throw new Error(`Inline style found in ${file}; CSP does not permit inline styles.`);
  for (const match of source.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)) {
    hashes.add(`'sha256-${createHash("sha256").update(match[1], "utf8").digest("base64")}'`);
  }
}

const config = JSON.parse(readFileSync(resolve("staticwebapp.config.json"), "utf8"));
const endpoint = process.env.NEXT_PUBLIC_LEAD_API_BASE_URL?.trim();
const connect = ["'self'"];
if (endpoint) connect.push(new URL(endpoint).origin);
config.globalHeaders["Content-Security-Policy"] = `default-src 'self'; script-src 'self' ${[...hashes].sort().join(" ")}; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src ${connect.join(" ")}; form-action 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'`;
writeFileSync(join(out, "staticwebapp.config.json"), `${JSON.stringify(config, null, 2)}\n`, "utf8");
console.log(`Generated CSP with ${hashes.size} deterministic inline-script hashes.`);
