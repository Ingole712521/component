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

for (const file of walk("app/docs/components")) {
  let source = fs.readFileSync(file, "utf8");
  const before = source;

  source = source.replace(
    /<aside className="hidden lg:block w-64[\s\S]*?<\/aside>\s*/g,
    ""
  );

  source = source.replace(/import \{ sidebarItems \} from ["'][^"']+["'];\r?\n/g, "");

  if (source.includes("h-screen overflow-hidden") && !source.includes("DocsSidebar")) {
    const rel = path
      .relative(path.dirname(file), path.join("app", "docs", "_components", "docs-sidebar.tsx"))
      .replace(/\\/g, "/")
      .replace(/\.tsx$/, "");
    const importPath = importPathFix(rel);
    const importLine = `import DocsSidebar from "${importPath}";\n`;
    const useClient = source.indexOf('"use client"');
    const insertAt = useClient === -1 ? 0 : source.indexOf("\n", useClient) + 1;
    source = `${source.slice(0, insertAt)}\n${importLine}${source.slice(insertAt)}`;
  }

  if (source.includes("h-screen overflow-hidden") && !source.includes("<DocsSidebar")) {
    source = source.replace(
      /(<div className="flex gap-12 h-full pt-24">\s*)/,
      "$1\n                    <DocsSidebar />\n"
    );
  }

  source = source.replace(/(<DocsSidebar \/>\s*){2,}/g, "<DocsSidebar />\n");

  source = source.replace(/\n{3,}/g, "\n\n");

  if (source !== before) {
    fs.writeFileSync(file, source);
    console.log(`fixed ${file}`);
  }
}

function importPathFix(rel) {
  if (!rel.startsWith(".")) return `./${rel}`;
  return rel;
}

console.log("Done.");
