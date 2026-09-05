import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const clientDir = path.join(projectRoot, "dist");
const serverEntry = path.join(projectRoot, "dist-ssr", "entry-server.js");

const routes = [
  "/",
  "/features",
  "/google-ads",
  "/how-it-works",
  "/demo",
  "/pricing",
  "/about",
  "/contact",
  "/privacy",
  "/data-usage",
  "/terms",
];

if (!fs.existsSync(serverEntry)) {
  throw new Error(`SSR bundle not found: ${serverEntry}`);
}

const { render } = await import(pathToFileURL(serverEntry).href);
const templatePath = path.join(clientDir, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Expected Vite root placeholder <div id="root"></div> not found.');
}

for (const route of routes) {
  const appHtml = render(route);
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  const outputDir =
    route === "/"
      ? clientDir
      : path.join(clientDir, route.replace(/^\//, ""));

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
  console.log(`Prerendered ${route}`);
}
