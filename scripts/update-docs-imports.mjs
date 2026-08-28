import fs from "node:fs";
import path from "node:path";

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) files.push(full);
  }
  return files;
}

for (const file of walk("app/docs")) {
  if (file.includes(`${path.sep}_components${path.sep}`) || file.includes(`${path.sep}_config${path.sep}`)) {
    continue;
  }

  let source = fs.readFileSync(file, "utf8");
  const before = source;

  source = source.replace(
    /import DocsSidebar from ["']\.\.\/\.\.\/DocsSidebar["'];/g,
    'import DocsSidebar from "../../_components/docs-sidebar";'
  );
  source = source.replace(
    /import DocsSidebar from ["']\.\/DocsSidebar["'];/g,
    'import DocsSidebar from "./_components/docs-sidebar";'
  );
  source = source.replace(
    /import \{ sidebarItems \} from ["']\.\.\/\.\.\/sidebarConfig["'];/g,
    'import { sidebarItems } from "../../_config/sidebar";'
  );

  if (source !== before) {
    fs.writeFileSync(file, source);
    console.log(`updated imports: ${file}`);
  }
}
