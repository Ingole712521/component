import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { getTemplate } from "@/templates";
import { zipStore } from "./zip-store";

function isSourceFile(name: string) {
  return (
    name === "constants.ts" ||
    name.endsWith("-portfolio.tsx") ||
    name.endsWith(".module.css")
  );
}

export async function buildTemplateZip(slug: string): Promise<Uint8Array | null> {
  const template = getTemplate(slug);
  if (!template) return null;

  const folder = path.join(process.cwd(), "templates", slug);
  const names = await readdir(folder);
  const files = names.filter(isSourceFile);

  if (!files.includes("constants.ts")) return null;

  const entries = await Promise.all(
    files.map(async (name) => ({
      name: `${slug}/${name}`,
      data: new Uint8Array(await readFile(path.join(folder, name))),
    })),
  );

  return zipStore(entries);
}
