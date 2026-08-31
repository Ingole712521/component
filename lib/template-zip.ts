import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { getTemplate } from "@/templates";
import { zipStore } from "./zip-store";

function isSourceFile(name: string) {
  return (
    name === "constants.ts" ||
    name === "scene.png" ||
    name.endsWith("-portfolio.tsx") ||
    name.endsWith(".module.css")
  );
}

function isCinematicFile(name: string) {
  return (
    name.endsWith(".tsx") ||
    name.endsWith(".ts") ||
    name.endsWith(".css")
  );
}

export async function buildTemplateZip(slug: string): Promise<Uint8Array | null> {
  const template = getTemplate(slug);
  if (!template) return null;

  const folder = path.join(process.cwd(), "templates", slug);
  const names = await readdir(folder);
  const files = names.filter(isSourceFile);

  if (!files.includes("constants.ts")) return null;

  const cinematicDir = path.join(process.cwd(), "templates", "cinematic");
  const cinematicNames = await readdir(cinematicDir);
  const cinematicFiles = cinematicNames.filter(isCinematicFile);

  const entries = await Promise.all([
    ...files.map(async (name) => ({
      name: `${slug}/${name}`,
      data: new Uint8Array(await readFile(path.join(folder, name))),
    })),
    ...cinematicFiles.map(async (name) => ({
      name: `cinematic/${name}`,
      data: new Uint8Array(await readFile(path.join(cinematicDir, name))),
    })),
  ]);

  return zipStore(entries);
}
