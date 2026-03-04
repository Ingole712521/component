#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import * as readline from "readline";

// ── ANSI colours (no chalk needed) ───────────────────────────────────────────
const c = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    white: "\x1b[37m",
    magenta: "\x1b[35m",
    bgCyan: "\x1b[46m",
};

const log = {
    info: (msg: string) => console.log(`${c.cyan}  ℹ${c.reset}  ${msg}`),
    success: (msg: string) => console.log(`${c.green}  ✔${c.reset}  ${msg}`),
    warn: (msg: string) => console.log(`${c.yellow}  ⚠${c.reset}  ${msg}`),
    error: (msg: string) => console.log(`${c.red}  ✖${c.reset}  ${msg}`),
    step: (msg: string) => console.log(`${c.cyan}  →${c.reset}  ${msg}`),
    blank: () => console.log(),
};

// ── Registry URL ─────────────────────────────────────────────────────────────
// When published, this points to the live site. Swap to localhost for dev.
const REGISTRY_BASE =
    process.env.PROGRESS_UI_REGISTRY || "https://progress-ui.vercel.app";

// ── Helpers ───────────────────────────────────────────────────────────────────
function fetchJson<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
        https
            .get(url, (res) => {
                if (res.statusCode === 301 || res.statusCode === 302) {
                    const location = res.headers.location;
                    if (!location) return reject(new Error("Redirect with no location"));
                    fetchJson<T>(location).then(resolve).catch(reject);
                    return;
                }
                if (res.statusCode !== 200) {
                    return reject(
                        new Error(`HTTP ${res.statusCode} from ${url}`)
                    );
                }
                let data = "";
                res.on("data", (chunk: Buffer) => (data += chunk.toString()));
                res.on("end", () => {
                    try {
                        resolve(JSON.parse(data) as T);
                    } catch {
                        reject(new Error("Failed to parse JSON from registry"));
                    }
                });
            })
            .on("error", reject);
    });
}

function prompt(question: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

function ensureDir(dirPath: string) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        log.step(`Created directory ${c.dim}${dirPath}${c.reset}`);
    }
}

// ── Banner ────────────────────────────────────────────────────────────────────
function printBanner() {
    console.log();
    console.log(
        `${c.cyan}${c.bold}  ██████╗ ██████╗  ██████╗  ██████╗ ██████╗ ███████╗███████╗███████╗${c.reset}`
    );
    console.log(
        `${c.cyan}${c.bold}  ██╔══██╗██╔══██╗██╔═══██╗██╔════╝ ██╔══██╗██╔════╝██╔════╝██╔════╝${c.reset}`
    );
    console.log(
        `${c.cyan}${c.bold}  ██████╔╝██████╔╝██║   ██║██║  ███╗██████╔╝█████╗  ███████╗███████╗${c.reset}`
    );
    console.log(
        `${c.cyan}${c.bold}  ██╔═══╝ ██╔══██╗██║   ██║██║   ██║██╔══██╗██╔══╝  ╚════██║╚════██║${c.reset}`
    );
    console.log(
        `${c.cyan}${c.bold}  ██║     ██║  ██║╚██████╔╝╚██████╔╝██║  ██║███████╗███████║███████║${c.reset}`
    );
    console.log(
        `${c.cyan}${c.bold}  ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝${c.reset}`
    );
    console.log();
    console.log(
        `${c.dim}  UI Components for React & Next.js — zero config, just copy & use${c.reset}`
    );
    console.log();
}

// ── Help ──────────────────────────────────────────────────────────────────────
function printHelp() {
    printBanner();
    console.log(`${c.bold}  USAGE${c.reset}`);
    console.log();
    console.log(`    ${c.cyan}npx progress-ui${c.reset} ${c.white}<command>${c.reset} ${c.dim}[options]${c.reset}`);
    console.log();
    console.log(`${c.bold}  COMMANDS${c.reset}`);
    console.log();
    console.log(`    ${c.cyan}add${c.reset} ${c.white}<component>${c.reset}       Add a component to your project`);
    console.log(`    ${c.cyan}list${c.reset}                  List all available components`);
    console.log(`    ${c.cyan}info${c.reset} ${c.white}<component>${c.reset}      Show details about a component`);
    console.log(`    ${c.cyan}help${c.reset}                  Show this help message`);
    console.log();
    console.log(`${c.bold}  EXAMPLES${c.reset}`);
    console.log();
    console.log(`    ${c.dim}$${c.reset} npx progress-ui add animated-button`);
    console.log(`    ${c.dim}$${c.reset} npx progress-ui add animated-button --path src/components/ui`);
    console.log(`    ${c.dim}$${c.reset} npx progress-ui list`);
    console.log(`    ${c.dim}$${c.reset} npx progress-ui info animated-button`);
    console.log();
    console.log(`${c.bold}  OPTIONS${c.reset}`);
    console.log();
    console.log(`    ${c.cyan}--path${c.reset} ${c.white}<dir>${c.reset}          Target directory ${c.dim}(default: components/ui)${c.reset}`);
    console.log(`    ${c.cyan}--overwrite${c.reset}           Overwrite existing files without prompting`);
    console.log(`    ${c.cyan}--version, -v${c.reset}        Print version`);
    console.log();
}

// ── Registry types ────────────────────────────────────────────────────────────
interface RegistryIndex {
    components: {
        name: string;
        displayName: string;
        description: string;
        category: string;
    }[];
}

interface RegistryFile {
    name: string;
    content: string;
}

interface RegistryComponent {
    name: string;
    displayName: string;
    description: string;
    category: string;
    dependencies: string[];
    files: RegistryFile[];
}

// ── Commands ──────────────────────────────────────────────────────────────────
async function cmdList() {
    log.step(`Fetching component list from registry…`);
    log.blank();

    let index: RegistryIndex;
    try {
        index = await fetchJson<RegistryIndex>(`${REGISTRY_BASE}/registry/index.json`);
    } catch (err) {
        log.error(`Could not reach registry: ${(err as Error).message}`);
        log.info(`Check your internet connection or try again later.`);
        process.exit(1);
    }

    const byCategory: Record<string, typeof index.components> = {};
    for (const comp of index.components) {
        (byCategory[comp.category] ??= []).push(comp);
    }

    for (const [category, comps] of Object.entries(byCategory)) {
        console.log(`  ${c.bold}${c.white}${category}${c.reset}`);
        for (const comp of comps) {
            console.log(
                `    ${c.cyan}${comp.name.padEnd(24)}${c.reset}${c.dim}${comp.description}${c.reset}`
            );
        }
        log.blank();
    }

    console.log(
        `  ${c.dim}Run ${c.reset}${c.cyan}npx progress-ui add <name>${c.reset}${c.dim} to install any component.${c.reset}`
    );
    log.blank();
}

async function cmdInfo(name: string) {
    log.step(`Fetching info for ${c.cyan}${name}${c.reset}…`);

    let comp: RegistryComponent;
    try {
        comp = await fetchJson<RegistryComponent>(
            `${REGISTRY_BASE}/registry/${name}.json`
        );
    } catch {
        log.error(`Component ${c.cyan}${name}${c.reset} not found in registry.`);
        log.info(`Run ${c.cyan}npx progress-ui list${c.reset} to see all components.`);
        process.exit(1);
    }

    log.blank();
    console.log(`  ${c.bold}${c.white}${comp.displayName}${c.reset}  ${c.dim}(${comp.name})${c.reset}`);
    console.log(`  ${c.dim}${comp.description}${c.reset}`);
    log.blank();
    console.log(`  ${c.bold}Category${c.reset}     ${comp.category}`);
    console.log(
        `  ${c.bold}Dependencies${c.reset} ${comp.dependencies.length ? comp.dependencies.join(", ") : c.dim + "none" + c.reset}`
    );
    console.log(
        `  ${c.bold}Files${c.reset}        ${comp.files.map((f) => f.name).join(", ")}`
    );
    log.blank();
    console.log(
        `  ${c.dim}Install with: ${c.reset}${c.cyan}npx progress-ui add ${name}${c.reset}`
    );
    log.blank();
}

async function cmdAdd(
    name: string,
    targetDir: string,
    overwrite: boolean
) {
    console.log();
    console.log(
        `  ${c.bold}Adding ${c.cyan}${name}${c.reset}${c.bold} to your project…${c.reset}`
    );
    log.blank();

    // 1. Fetch component from registry
    log.step("Fetching component from registry…");
    let comp: RegistryComponent;
    try {
        comp = await fetchJson<RegistryComponent>(
            `${REGISTRY_BASE}/registry/${name}.json`
        );
    } catch {
        log.error(`Component ${c.cyan}${name}${c.reset} not found.`);
        log.info(`Run ${c.cyan}npx progress-ui list${c.reset} to see all available components.`);
        process.exit(1);
    }

    log.success(`Found ${c.white}${comp.displayName}${c.reset}`);

    // 2. Dependencies
    if (comp.dependencies.length > 0) {
        log.blank();
        log.warn(
            `This component has dependencies: ${c.white}${comp.dependencies.join(", ")}${c.reset}`
        );
        log.info(
            `Install them with: ${c.cyan}npm install ${comp.dependencies.join(" ")}${c.reset}`
        );
    }

    // 3. Resolve output directory
    const cwd = process.cwd();
    const outDir = path.resolve(cwd, targetDir);
    ensureDir(outDir);

    // 4. Write files
    log.blank();
    for (const file of comp.files) {
        const filePath = path.join(outDir, file.name);
        const relPath = path.relative(cwd, filePath);

        if (fs.existsSync(filePath) && !overwrite) {
            const answer = await prompt(
                `  ${c.yellow}⚠${c.reset}  ${c.white}${relPath}${c.reset} already exists. Overwrite? ${c.dim}(y/N)${c.reset} `
            );
            if (answer.toLowerCase() !== "y") {
                log.warn(`Skipped ${relPath}`);
                continue;
            }
        }

        fs.writeFileSync(filePath, file.content, "utf-8");
        log.success(`Created ${c.white}${relPath}${c.reset}`);
    }

    // 5. Done!
    log.blank();
    console.log(
        `  ${c.green}${c.bold}Done!${c.reset} Import it in your code:`
    );
    log.blank();
    console.log(
        `  ${c.dim}import ${comp.displayName.replace(/\s/g, "")} from "@/components/ui/${comp.files[0].name.replace(".tsx", "")}";${c.reset}`
    );
    log.blank();
    console.log(
        `  ${c.dim}Visit ${c.reset}${c.cyan}https://progress-ui.vercel.app/docs${c.reset}${c.dim} for usage examples.${c.reset}`
    );
    log.blank();
}

// ── Entry point ───────────────────────────────────────────────────────────────
async function main() {
    const args = process.argv.slice(2);

    // Flags
    const overwrite = args.includes("--overwrite");
    const pathIdx = args.indexOf("--path");
    const targetDir = pathIdx !== -1 && args[pathIdx + 1]
        ? args[pathIdx + 1]
        : "components/ui";

    // Strip flags for command parsing
    const positional = args.filter(
        (a, i) =>
            a !== "--overwrite" &&
            a !== "--path" &&
            args[i - 1] !== "--path"
    );

    const [command, ...rest] = positional;

    if (!command || command === "help" || command === "--help" || command === "-h") {
        printHelp();
        return;
    }

    if (command === "--version" || command === "-v") {
        const pkg = require("../package.json") as { version: string };
        console.log(`progress-ui v${pkg.version}`);
        return;
    }

    if (command === "list") {
        await cmdList();
        return;
    }

    if (command === "info") {
        if (!rest[0]) {
            log.error("Please specify a component name.");
            log.info("Usage: npx progress-ui info <component>");
            process.exit(1);
        }
        await cmdInfo(rest[0]);
        return;
    }

    if (command === "add") {
        if (!rest[0]) {
            log.error("Please specify a component name.");
            log.info("Usage: npx progress-ui add <component>");
            process.exit(1);
        }
        await cmdAdd(rest[0], targetDir, overwrite);
        return;
    }

    log.error(`Unknown command: ${c.white}${command}${c.reset}`);
    log.info(`Run ${c.cyan}npx progress-ui help${c.reset} for usage.`);
    process.exit(1);
}

main().catch((err) => {
    console.error(`\n  ${c.red}Unexpected error:${c.reset}`, err);
    process.exit(1);
});
