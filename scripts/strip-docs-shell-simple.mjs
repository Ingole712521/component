/**
 * Simple shell stripper using regex (no AST).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const files = [
  "app/docs/components/carousel/page.tsx",
  "app/docs/components/mouse-tracker/page.tsx",
  "app/docs/components/pricing/page.tsx",
  "app/docs/components/scroll-reveal/page.tsx",
  "app/docs/components/smart-wrap-text/page.tsx",
  "app/docs/components/svg-path-page-transition/page.tsx",
  "app/docs/components/tech-marquee/page.tsx",
];

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const shellOpen =
  /<div className="h-screen overflow-hidden bg-\[var\(--background\)\][^"]*">\s*<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">\s*<div className="flex gap-12 h-full pt-24">\s*<DocsSidebar \/>\s*(?:\{\/\*[^*]*\*\/\}\s*)?<main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2(?: custom-scrollbar)?">\s*<div className="pb-24 space-y-(?:12|16|20)">/;

const shellClose =
  /<\/div>\s*<\/main>\s*<\/div>\s*<\/div>\s*<\/div>\s*\);\s*\n\}/;

for (const rel of files) {
  const file = path.join(root, rel);
  let source = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");

  if (!source.includes("DocsSidebar")) {
    console.log(`skip: ${rel}`);
    continue;
  }

  const copyImport = `import { CopyButton } from "../../_components/copy-button";\n\n`;

  source = source.replace(/import DocsSidebar from ["'][^"']+["'];\n/g, "");
  source = source.replace(
    /function CopyButton\(\{ code \}: \{ code: string \}\) \{[\s\S]*?\n\}\n\n/g,
    ""
  );

  if (!source.includes("copy-button")) {
    source = source.replace('"use client";\n', `"use client";\n\n${copyImport}`);
  }

  if (!shellOpen.test(source)) {
    console.warn(`no open match: ${rel}`);
    continue;
  }

  source = source.replace(shellOpen, `<div className="doc-stack">`);

  if (!shellClose.test(source)) {
    console.warn(`no close match: ${rel}`);
    continue;
  }

  source = source.replace(shellClose, `    </div>\n  );\n}`);

  fs.writeFileSync(file, source);
  console.log(`fixed: ${rel}`);
}

console.log("Done.");
