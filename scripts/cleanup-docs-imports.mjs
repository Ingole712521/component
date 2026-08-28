import fs from "node:fs";
import path from "node:path";

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name === "page.tsx") files.push(full);
  }
  return files;
}

for (const file of walk("app/docs")) {
  let source = fs.readFileSync(file, "utf8");
  const before = source;

  source = source.replace(/import DocsSidebar from ["'][^"']+["'];\r?\n/g, "");
  source = source.replace(/import \{ sidebarItems \} from ["'][^"']+["'];\r?\n/g, "");
  source = source.replace(/const sidebarItems(?:: [^=]+)? = \[[\s\S]*?\];\r?\n\r?\n/g, "");

  source = source.replace(/\n{3,}/g, "\n\n");

  if (source !== before) {
    fs.writeFileSync(file, source);
    console.log(`cleaned ${file}`);
  }
}
