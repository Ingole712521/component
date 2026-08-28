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

const patterns = [
  /function CopyButton\(\{ code \}: \{ code: string \}\) \{[\s\S]*?\n\}\r?\n\r?\n/g,
  /function CopyButton\(\{ code \}: \{ code: string \}\) \{[\s\S]*?\};\r?\n\r?\n/g,
  /function CopyButton\(\{ text \}: \{ text: string \}\) \{[\s\S]*?\n\}\r?\n\r?\n/g,
];

for (const file of walk("app/docs")) {
  let source = fs.readFileSync(file, "utf8");
  if (!source.includes("copy-button")) continue;

  const before = source;
  for (const pattern of patterns) {
    source = source.replace(pattern, "");
  }

  if (source !== before) {
    fs.writeFileSync(file, source);
    console.log(`deduped CopyButton in ${file}`);
  }
}
