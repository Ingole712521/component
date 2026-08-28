/**
 * Copies app source components into packages/cli/registry for self-contained publishing.
 * Run: node scripts/sync-cli-registry.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const cliComponents = path.join(root, "packages", "cli", "registry", "components");

const fileCopies = [
  ["components/ui/navbar-glass.tsx", "navbar-glass.tsx"],
  ["components/ui/ThreeDImageRing.tsx", "3d-image-ring.tsx"],
  ["components/ui/WaterFillButton.tsx", "water-fill-button.tsx"],
  ["components/ui/OrbitLogoButton.tsx", "orbit-logo-button.tsx"],
  ["components/ui/AnimatedButton.tsx", "button.tsx"],
  ["components/ui/ripple-button.tsx", "ripple-button.tsx"],
  ["components/ui/loader.tsx", "loader.tsx"],
  ["components/ui/LoadingScreen.tsx", "loading-screen.tsx"],
  ["components/ui/SmartWrapText.tsx", "smart-wrap-text.tsx"],
];

const threeDButtonBundle = `"use client";

export { Motion3DButton } from "./lift-3d-button";
export { GSAP3DButton } from "./cube-3d-button";
export { FramerMotion3DButton } from "./spring-3d-button";
export type {
  Motion3DButtonProps,
  GSAP3DButtonProps,
  FramerMotion3DButtonProps,
} from "./3d-button-types";
`;

function copyFile(fromRel, toName) {
  const from = path.join(root, fromRel);
  const to = path.join(cliComponents, toName);
  if (!fs.existsSync(from)) {
    console.warn(`missing source: ${fromRel}`);
    return;
  }
  fs.copyFileSync(from, to);
  console.log(`copied ${fromRel} -> ${toName}`);
}

for (const [from, to] of fileCopies) {
  copyFile(from, to);
}

copyFile("components/3d-buttons/types.ts", "3d-button-types.ts");
copyFile("components/3d-buttons/styles.module.css", "3d-button-styles.module.css");
copyFile("components/3d-buttons/Motion3DButton.tsx", "lift-3d-button.tsx");
copyFile("components/3d-buttons/GSAP3DButton.tsx", "cube-3d-button.tsx");
copyFile("components/3d-buttons/FramerMotion3DButton.tsx", "spring-3d-button.tsx");

for (const file of ["lift-3d-button.tsx", "cube-3d-button.tsx", "spring-3d-button.tsx"]) {
  const target = path.join(cliComponents, file);
  let content = fs.readFileSync(target, "utf8");
  content = content
    .replace(/from "\.\/types"/g, 'from "./3d-button-types"')
    .replace(/from "\.\/styles\.module\.css"/g, 'from "./3d-button-styles.module.css"');
  fs.writeFileSync(target, content);
}

fs.writeFileSync(path.join(cliComponents, "3d-buttons.tsx"), threeDButtonBundle);
console.log("wrote 3d-buttons.tsx bundle");
console.log("Done.");
