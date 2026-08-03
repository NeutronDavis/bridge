import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const root = resolve("out");
if (!existsSync(root)) throw new Error("Static export directory out/ was not created.");

const required = ["index.html", "404.html", "platform/index.html", "solutions/index.html", "industries/index.html", "pricing/index.html", "security/index.html", "resources/index.html", "company/index.html", "contact/index.html", "request-demo/index.html", "request-demo/success/index.html", "privacy/index.html", "terms/index.html", "sitemap.xml", "robots.txt"];
for (const file of required) if (!existsSync(join(root, file))) throw new Error(`Missing exported file: out/${file}`);

const html = [];
function walk(directory) { for (const name of readdirSync(directory)) { const path = join(directory, name); if (statSync(path).isDirectory()) walk(path); else if (path.endsWith(".html")) html.push(path); } }
walk(root);

for (const file of html) {
  const content = readFileSync(file, "utf8");
  for (const match of content.matchAll(/(?:src|href)="([^"#?]+)"/g)) {
    const href = match[1];
    if (!href || href.startsWith("//") || /^[a-z]+:/i.test(href)) continue;
    const clean = href.replace(/^\//, "");
    const candidates = [join(root, clean), join(root, clean, "index.html"), join(root, `${clean}.html`)];
    if (!candidates.some(existsSync)) throw new Error(`Broken local reference ${href} in ${relative(root, file)}`);
  }
}
console.log(`Verified ${required.length} required outputs and ${html.length} HTML files.`);

const deployedConfig = join(root, "staticwebapp.config.json");
if (!existsSync(deployedConfig)) throw new Error("Missing generated out/staticwebapp.config.json.");
const csp = JSON.parse(readFileSync(deployedConfig, "utf8")).globalHeaders?.["Content-Security-Policy"];
if (!csp || csp.includes("'unsafe-inline'")) throw new Error("Generated CSP is missing or permits unsafe-inline.");
