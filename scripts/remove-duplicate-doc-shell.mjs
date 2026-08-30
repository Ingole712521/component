/**
 * Removes duplicate old docs shell blocks left after strip-docs-shell.mjs.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const docsRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "app", "docs");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name === "page.tsx") files.push(full);
  }
  return files;
}

for (const file of walk(docsRoot)) {
  let source = fs.readFileSync(file, "utf8");
  if (!source.includes('className="h-screen overflow-hidden bg-[var(--background)]')) continue;
  if (!source.includes("doc-stack")) continue;

  const marker = '\nexport default function';
  const shellIdx = source.indexOf('className="h-screen overflow-hidden bg-[var(--background)]');
  const exportBeforeShell = source.lastIndexOf(marker, shellIdx);
  if (exportBeforeShell === -1) continue;

  const trimmed = source.slice(0, exportBeforeShell).trimEnd() + "\n";
  fs.writeFileSync(file, trimmed);
  console.log(`removed duplicate shell: ${path.relative(docsRoot, file)}`);
}

console.log("Done.");
