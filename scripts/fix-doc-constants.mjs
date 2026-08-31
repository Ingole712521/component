/**
 * Restores installCode/usageCode constants removed by strip-docs-shell.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const fixes = [
  "app/docs/components/3d-buttons/cube/page.tsx",
  "app/docs/components/3d-buttons/spring/page.tsx",
  "app/docs/components/3d-buttons/lift/page.tsx",
  "app/docs/components/3d-buttons/page.tsx",
  "app/docs/components/ripple-button/page.tsx",
  "app/docs/components/navbar-glass/page.tsx",
  "app/docs/components/navbar-floating/page.tsx",
  "app/docs/components/loading-screen/page.tsx",
  "app/docs/components/3d-image-ring/page.tsx",
];

function extractConstsFromGit(relPath) {
  const source = execSync(`git show HEAD:${relPath.replace(/\\/g, "/")}`, {
    cwd: root,
    encoding: "utf8",
  });

  const fnMatch = source.match(/export default function \w+\([^)]*\)\s*\{/);
  if (!fnMatch) return null;

  const start = fnMatch.index + fnMatch[0].length;
  const slice = source.slice(start, start + 3000);
  const install = slice.match(
    /const installCode\s*=\s*(?:"[^"]*"|`[\s\S]*?`|'[^']*');/
  );
  const usage = slice.match(/const usageCode\s*=\s*`[\s\S]*?`;/);

  return {
    install: install?.[0] ?? null,
    usage: usage?.[0] ?? null,
  };
}

for (const rel of fixes) {
  const file = path.join(root, rel);
  let content = fs.readFileSync(file, "utf8");

  const hasInstallRef = content.includes("{installCode}");
  const hasUsageRef = content.includes("{usageCode}");
  const hasInstallDef = /const installCode\s*=/.test(content);
  const hasUsageDef = /const usageCode\s*=/.test(content);

  if ((!hasInstallRef || hasInstallDef) && (!hasUsageRef || hasUsageDef)) continue;

  const fromGit = extractConstsFromGit(rel);
  const lines = [];
  if (hasInstallRef && !hasInstallDef && fromGit?.install) {
    lines.push(fromGit.install.replace("nnpx", "npx"));
  }
  if (hasUsageRef && !hasUsageDef && fromGit?.usage) {
    lines.push(fromGit.usage);
  }

  if (lines.length === 0) {
    console.warn(`skip ${rel}: no constants extracted`);
    continue;
  }

  content = content.replace(
    /(export default function \w+\([^)]*\)\s*\{\s*\n)(\s*return \()/,
    `$1    ${lines.join("\n    ")}\n\n$2`
  );

  fs.writeFileSync(file, content);
  console.log(`fixed: ${rel}`);
}

console.log("Done.");
