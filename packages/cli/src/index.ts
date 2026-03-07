#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import * as readline from "readline";

// ── Get package.json for version ─────────────────────────────────────────────
const packageJson = fs.readJsonSync(path.join(__dirname, "../package.json"));

// ── Paths ────────────────────────────────────────────────────────────────────
// Registry is bundled with the package
const REGISTRY_PATH = path.join(__dirname, "../registry");
const REGISTRY_JSON = path.join(REGISTRY_PATH, "registry.json");
const COMPONENTS_DIR = path.join(REGISTRY_PATH, "components");

// ── Types ────────────────────────────────────────────────────────────────────
interface Registry {
    name: string;
    components: Record<string, ComponentDef>;
}

interface ComponentDef {
    name: string;
    displayName: string;
    description: string;
    category: string;
    dependencies: string[];
    files: string[];
}

// ── Logger ───────────────────────────────────────────────────────────────────
const logger = {
    info: (msg: string) => console.log(chalk.cyan("  ℹ "), msg),
    success: (msg: string) => console.log(chalk.green("  ✔ "), msg),
    warn: (msg: string) => console.log(chalk.yellow("  ⚠ "), msg),
    error: (msg: string) => console.log(chalk.red("  ✖ "), msg),
    step: (msg: string) => console.log(chalk.cyan("  → "), msg),
    blank: () => console.log(),
};

// ── Helpers ──────────────────────────────────────────────────────────────────
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

async function loadRegistry(): Promise<Registry> {
    if (!(await fs.pathExists(REGISTRY_JSON))) {
        throw new Error(`Registry not found at ${REGISTRY_JSON}`);
    }
    return fs.readJson(REGISTRY_JSON);
}

function printBanner() {
    console.log();
    console.log(
        chalk.cyan.bold(
            "  ██████╗ ██████╗  ██████╗  ██████╗ ██████╗ ███████╗███████╗███████╗"
        )
    );
    console.log(
        chalk.cyan.bold(
            "  ██╔══██╗██╔══██╗██╔═══██╗██╔════╝ ██╔══██╗██╔════╝██╔════╝██╔════╝"
        )
    );
    console.log(
        chalk.cyan.bold(
            "  ██████╔╝██████╔╝██║   ██║██║  ███╗██████╔╝█████╗  ███████╗███████╗"
        )
    );
    console.log(
        chalk.cyan.bold(
            "  ██╔═══╝ ██╔══██╗██║   ██║██║   ██║██╔══██╗██╔══╝  ╚════██║╚════██║"
        )
    );
    console.log(
        chalk.cyan.bold(
            "  ██║     ██║  ██║╚██████╔╝╚██████╔╝██║  ██║███████╗███████║███████║"
        )
    );
    console.log(
        chalk.cyan.bold(
            "  ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝"
        )
    );
    console.log();
    console.log(
        chalk.dim("  UI Components for React & Next.js — zero config, just copy & use")
    );
    console.log();
}

// ── Commands ─────────────────────────────────────────────────────────────────
async function initCommand(options: { path?: string; yes?: boolean }) {
    printBanner();

    const cwd = process.cwd();
    const targetDir = options.path || "components/ui";
    const fullPath = path.resolve(cwd, targetDir);

    logger.step(`Initializing your-ui in ${chalk.dim(targetDir)}...`);

    // Create components/ui directory
    await fs.ensureDir(fullPath);
    logger.success(`Created directory ${chalk.dim(targetDir)}`);

    // Create a components.json config file
    const configPath = path.join(cwd, "components.json");
    const config = {
        $schema: "https://ui.shadcn.com/schema.json",
        style: "default",
        rsc: true,
        tsx: true,
        tailwind: {
            config: "tailwind.config.ts",
            css: "app/globals.css",
            baseColor: "zinc",
            cssVariables: true,
        },
        aliases: {
            components: "@/components",
            utils: "@/lib/utils",
        },
    };

    if (await fs.pathExists(configPath)) {
        if (!options.yes) {
            const answer = await prompt(
                `  ${chalk.yellow("⚠")}  components.json already exists. Overwrite? ${chalk.dim("(y/N)")} `
            );
            if (answer.toLowerCase() !== "y") {
                logger.warn("Skipped overwriting components.json");
                return;
            }
        }
    }

    await fs.writeJson(configPath, config, { spaces: 2 });
    logger.success("Created components.json");

    logger.blank();
    logger.success("Initialization complete!");
    logger.info(`Add components with: ${chalk.cyan("npx progress-ui add <component>")}`);
    logger.blank();
}

async function addCommand(componentName: string, options: { path?: string; overwrite?: boolean }) {
    console.log();
    console.log(chalk.bold(`Adding ${chalk.cyan(componentName)} to your project...`));
    logger.blank();

    // Load registry
    let registry: Registry;
    try {
        registry = await loadRegistry();
    } catch (err) {
        logger.error(`Failed to load registry: ${(err as Error).message}`);
        process.exit(1);
    }

    // Find component
    const component = registry.components[componentName];
    if (!component) {
        logger.error(`Component "${componentName}" not found.`);
        logger.info(`Run ${chalk.cyan("npx progress-ui list")} to see available components.`);
        process.exit(1);
    }

    logger.success(`Found ${chalk.white(component.displayName)}`);

    // Show dependencies if any
    if (component.dependencies && component.dependencies.length > 0) {
        logger.blank();
        logger.warn(`This component requires dependencies: ${chalk.white(component.dependencies.join(", "))}`);
        logger.step(`Installing dependencies automatically...`);
        try {
            const { execSync } = require('child_process');
            execSync(`npm install ${component.dependencies.join(" ")}`, { stdio: 'inherit', cwd: process.cwd() });
            logger.success(`Successfully installed dependencies!`);
        } catch (error) {
            logger.error(`Failed to install dependencies automatically. Please run: ${chalk.cyan(`npm install ${component.dependencies.join(" ")}`)}`);
        }
    }

    // Resolve output directory
    const cwd = process.cwd();
    const targetDir = options.path || "components/ui";
    const outDir = path.resolve(cwd, targetDir);

    await fs.ensureDir(outDir);

    // Copy files
    logger.blank();
    for (const fileName of component.files) {
        const sourcePath = path.join(COMPONENTS_DIR, fileName);
        const targetPath = path.join(outDir, fileName);
        const relPath = path.relative(cwd, targetPath);

        if (!(await fs.pathExists(sourcePath))) {
            logger.error(`Source file not found: ${chalk.dim(sourcePath)}`);
            continue;
        }

        if (await fs.pathExists(targetPath)) {
            if (!options.overwrite) {
                const answer = await prompt(
                    `  ${chalk.yellow("⚠")}  ${chalk.white(relPath)} already exists. Overwrite? ${chalk.dim("(y/N)")} `
                );
                if (answer.toLowerCase() !== "y") {
                    logger.warn(`Skipped ${relPath}`);
                    continue;
                }
            }
        }

        await fs.copy(sourcePath, targetPath);
        logger.success(`Created ${chalk.white(relPath)}`);
    }

    logger.blank();
    console.log(chalk.green.bold("  Done!"), "Import it in your code:");
    logger.blank();
    console.log(
        chalk.dim(`  import ${component.displayName.replace(/\s/g, "")} from "@/${targetDir}/${component.files[0].replace(".tsx", "")}";`)
    );
    logger.blank();
}

async function listCommand() {
    logger.step("Fetching available components...");
    logger.blank();

    let registry: Registry;
    try {
        registry = await loadRegistry();
    } catch (err) {
        logger.error(`Failed to load registry: ${(err as Error).message}`);
        process.exit(1);
    }

    const components = Object.values(registry.components);

    // Group by category
    const byCategory: Record<string, ComponentDef[]> = {};
    for (const comp of components) {
        (byCategory[comp.category] ??= []).push(comp);
    }

    for (const [category, comps] of Object.entries(byCategory)) {
        console.log(chalk.bold.white(`  ${category}`));
        for (const comp of comps) {
            console.log(
                `    ${chalk.cyan(comp.name.padEnd(20))}${chalk.dim(comp.description)}`
            );
        }
        logger.blank();
    }

    console.log(
        chalk.dim(`  Run ${chalk.cyan("npx progress-ui add <name>")} to install any component.`)
    );
    logger.blank();
}

// ── CLI Setup ────────────────────────────────────────────────────────────────
const program = new Command();

program
    .name("progress-ui")
    .description("CLI to add beautiful UI components to your project")
    .version(packageJson.version);

program
    .command("init")
    .description("Initialize your-ui in your project")
    .option("-p, --path <path>", "Target directory for components", "components/ui")
    .option("-y, --yes", "Skip confirmation prompts")
    .action(initCommand);

program
    .command("add <component>")
    .description("Add a component to your project")
    .option("-p, --path <path>", "Target directory for components", "components/ui")
    .option("-o, --overwrite", "Overwrite existing files without prompting")
    .action(addCommand);

program
    .command("list")
    .alias("ls")
    .description("List all available components")
    .action(listCommand);

// Show banner on default command
program
    .argument("[command]", "command to run")
    .action((cmd) => {
        if (!cmd) {
            printBanner();
            program.help();
        }
    });

program.parse();
