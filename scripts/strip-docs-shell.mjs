/**
 * Strips duplicated docs shell from component pages.
 * Layout is provided by app/docs/layout.tsx.
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

function isAtModuleLevel(source, index) {
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;

  for (let i = 0; i < index; i += 1) {
    const c = source[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (c === "\\") {
      escaped = true;
      continue;
    }
    if (!inDouble && !inTemplate && c === "'") inSingle = !inSingle;
    else if (!inSingle && !inTemplate && c === '"') inDouble = !inDouble;
    else if (!inSingle && !inDouble && c === "`") inTemplate = !inTemplate;
  }

  return !inSingle && !inDouble && !inTemplate;
}

function findShellFunctionRange(source, shellIdx) {
  const exportPattern = /export default function/g;
  let match;
  while ((match = exportPattern.exec(source)) !== null) {
    const fnStart = match.index;
    if (!isAtModuleLevel(source, fnStart)) continue;

    const braceStart = source.indexOf("{", fnStart);
    let depth = 0;
    let i = braceStart;
    while (i < source.length) {
      const ch = source[i];
      if (ch === "{") depth += 1;
      else if (ch === "}") {
        depth -= 1;
        if (depth === 0) {
          const fnEnd = i + 1;
          if (shellIdx >= fnStart && shellIdx < fnEnd) {
            return { fnStart, fnEnd, fnBodyStart: braceStart + 1 };
          }
          break;
        }
      }
      i += 1;
    }
  }
  return null;
}

function extractInnerContent(source, fnStart, fnEnd) {
  const slice = source.slice(fnStart, fnEnd);
  const wrapperMatch = slice.match(/<div className="pb-24 space-y-(?:10|12|16|20)">/);
  if (!wrapperMatch) return null;

  const openTag = wrapperMatch[0];
  const start = slice.indexOf(openTag) + openTag.length;

  let depth = 1;
  let i = start;
  while (i < slice.length && depth > 0) {
    const nextOpen = slice.indexOf("<div", i);
    const nextClose = slice.indexOf("</div>", i);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
    } else {
      depth -= 1;
      i = nextClose + 6;
    }
  }

  if (depth !== 0) return null;
  return slice.slice(start, i - 6).trim();
}

function stripCopyButton(source) {
  return source.replace(
    /function CopyButton\(\{ code \}: \{ code: string \}\) \{[\s\S]*?\n\}\r?\n\r?\n/g,
    ""
  );
}

function refactorFile(file) {
  let source = fs.readFileSync(file, "utf8");
  const shellMarker = /className="h-screen overflow-hidden bg-\[var\(--background\)\]/;
  if (!shellMarker.test(source)) return false;

  const shellMatch = source.match(shellMarker);
  const shellIdx = source.indexOf(shellMatch[0]);
  const range = findShellFunctionRange(source, shellIdx);
  if (!range) return false;

  const content = extractInnerContent(source, range.fnStart, range.fnEnd);
  if (!content) {
    console.warn(`skip (no content): ${path.relative(docsRoot, file)}`);
    return false;
  }

  source = source.replace(/import DocsSidebar from ["'][^"']+["'];\r?\n/g, "");
  source = stripCopyButton(source);

  const needsCopy = content.includes("<CopyButton");
  const copyPath = relativeImport(file, path.join(docsRoot, "_components", "copy-button.tsx"));
  const copyImport = `import { CopyButton } from "${copyPath}";\n`;

  if (needsCopy && !source.includes("copy-button")) {
    const clientIdx = source.indexOf('"use client"');
    if (clientIdx !== -1) {
      const insertAt = source.indexOf("\n", clientIdx) + 1;
      source = `${source.slice(0, insertAt)}\n${copyImport}${source.slice(insertAt)}`;
    } else {
      source = `"use client";\n\n${copyImport}${source}`;
    }
  }

  const fnName = source.slice(range.fnStart).match(/export default function (\w+)/)?.[1] ?? "Page";
  const returnIdx = source.indexOf("return (", range.fnBodyStart);
  const prelude =
    returnIdx !== -1
      ? source
          .slice(range.fnBodyStart, returnIdx)
          .trim()
          .split("\n")
          .map((line) => `    ${line}`)
          .join("\n")
      : "";

  const indented = content
    .split("\n")
    .map((line) => (line.trim() ? `      ${line}` : ""))
    .join("\n");

  const newFn = `export default function ${fnName}() {
${prelude ? `${prelude}\n\n` : ""}    return (
      <div className="doc-stack">
${indented}
      </div>
    );
  }`;

  const updated = source.slice(0, range.fnStart) + newFn + source.slice(range.fnEnd);
  fs.writeFileSync(file, updated.replace(/\n{3,}/g, "\n\n"));
  return true;
}

let count = 0;
for (const file of walk(docsRoot)) {
  if (refactorFile(file)) {
    count += 1;
    console.log(`refactored: ${path.relative(docsRoot, file)}`);
  }
}

console.log(`Done. ${count} files updated.`);
