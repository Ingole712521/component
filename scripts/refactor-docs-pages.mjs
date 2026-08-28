/**
 * Strips duplicated docs shell from page files after app/docs/layout.tsx was added.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.join(__dirname, "..", "app", "docs");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name === "page.tsx" && full !== path.join(docsRoot, "page.tsx")) {
      files.push(full);
    }
  }
  return files;
}

function relativeImport(fromFile, target) {
  let rel = path.relative(path.dirname(fromFile), target).replace(/\\/g, "/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel.replace(/\.tsx?$/, "");
}

function extractMainContent(source) {
  const shellStart = source.search(
    /return \(\s*<div className="h-screen overflow-hidden bg-black/
  );
  if (shellStart === -1) return null;

  const mainOpen = source.indexOf("<main", shellStart);
  if (mainOpen === -1) return null;

  const slice = source.slice(mainOpen);
  const wrapper = slice.match(/<div className="pb-24 space-y-(?:10|12|16|20)">/);
  if (!wrapper) return null;

  const contentStart = mainOpen + slice.indexOf(wrapper[0]) + wrapper[0].length;

  let depth = 1;
  let i = contentStart;
  while (i < source.length && depth > 0) {
    const open = source.indexOf("<div", i);
    const close = source.indexOf("</div>", i);
    if (close === -1) break;
    if (open !== -1 && open < close) {
      depth += 1;
      i = open + 4;
    } else {
      depth -= 1;
      i = close + 6;
    }
  }

  if (depth !== 0) return null;
  return source.slice(contentStart, i - 6).trim();
}

function refactorFile(file) {
  let source = fs.readFileSync(file, "utf8");
  if (!source.includes('className="h-screen overflow-hidden bg-black')) return false;

  const content = extractMainContent(source);
  if (!content) return false;

  const copyImport = `import { CopyButton } from "${relativeImport(file, path.join(docsRoot, "_components", "copy-button.tsx"))}";\n`;

  source = source.replace(/import DocsSidebar from ["'][^"']+["'];\r?\n/g, "");
  source = source.replace(/import \{ sidebarItems \} from ["'][^"']+["'];\r?\n/g, "");
  source = source.replace(/const sidebarItems(?:: [^=]+)? = \[[\s\S]*?\];\r?\n\r?\n/g, "");
  source = source.replace(/function CopyButton\(\{ code \}: \{ code: string \}\) \{[\s\S]*?\n\}\r?\n\r?\n/g, "");
  source = source.replace(/function CopyButton\(\{ code \}: \{ code: string \}\) \{[\s\S]*?\};\r?\n\r?\n/g, "");

  if (content.includes("<CopyButton") && !source.includes("copy-button")) {
    const idx = source.indexOf('"use client"');
    const insertAt = idx === -1 ? 0 : source.indexOf("\n", idx) + 1;
    source = `${source.slice(0, insertAt)}\n${copyImport}${source.slice(insertAt)}`;
  }

  const fnMatch = source.match(/export default function \w+\([^)]*\) \{/);
  if (!fnMatch) return false;

  const returnIdx = source.indexOf(
    'return (\n        <div className="h-screen overflow-hidden bg-black',
    fnMatch.index
  );
  if (returnIdx === -1) {
    const alt = source.indexOf(
      'return (\n    <div className="h-screen overflow-hidden bg-black',
      fnMatch.index
    );
    if (alt === -1) return false;
  }

  const startReturn = source.indexOf("return (", fnMatch.index);
  const endReturn = source.lastIndexOf(");");

  const before = source.slice(0, startReturn + "return (".length);
  const after = source.slice(endReturn);

  const updated = `${before}\n    <>\n${content
    .split("\n")
    .map((line) => (line ? `      ${line}` : ""))
    .join("\n")}\n    </>\n  ${after}`;

  fs.writeFileSync(file, updated.replace(/\n{3,}/g, "\n\n"));
  return true;
}

for (const file of walk(docsRoot)) {
  if (refactorFile(file)) {
    console.log(`refactored: ${path.relative(docsRoot, file)}`);
  }
}

console.log("Done.");
