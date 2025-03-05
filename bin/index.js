#!/usr/bin/env node
const { program } = require("commander");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");

const TEMPLATES_DIR = path.join(__dirname, "../templates");

// Asosiy fayl yo‘llarini aniqlash
const getTargetPath = (type, name, ext) => {
  const srcPath = path.join(process.cwd(), "src");
  const basePath =
    type === "utils"
      ? path.join(srcPath, "utils")
      : path.join(srcPath, "components");
  return path.join(basePath, `${name}${ext}`);
};

const copyTemplate = async (type, name) => {
  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Qaysi formatni ishlatmoqchisiz?",
      choices: ["TypeScript", "JavaScript"],
    },
  ]);

  const ext =
    type === "utils"
      ? language === "TypeScript"
        ? ".ts"
        : ".js"
      : language === "TypeScript"
      ? ".tsx"
      : ".jsx";

  const templatePath = path.join(TEMPLATES_DIR, type, `template${ext}`);
  const targetPath = getTargetPath(type, name, ext);

  // Agar kerakli papka yo'q bo'lsa, yaratish
  fs.ensureDirSync(path.dirname(targetPath));

  if (fs.existsSync(targetPath)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: "confirm",
        name: "overwrite",
        message: `${name}${ext} allaqachon mavjud. Almashtirishni xohlaysizmi?`,
        default: false,
      },
    ]);

    if (!overwrite) {
      console.log("⛔ Jarayon bekor qilindi.");
      return;
    }
  }

  if (fs.existsSync(templatePath)) {
    fs.copySync(templatePath, targetPath);
    console.log(`✅ ${targetPath} yaratildi!`);
  } else {
    console.log(`❌ Shablon topilmadi: ${templatePath}`);
  }
};

// CLI buyruqlari
program
  .command("component <name>")
  .description("Yangi React komponent yaratish")
  .action((name) => copyTemplate("components", name));
program
  .command("hook <name>")
  .description("Yangi React hook yaratish")
  .action((name) => copyTemplate("hooks", name));
program
  .command("util <name>")
  .description("Yangi util funksiyani yaratish")
  .action((name) => copyTemplate("utils", name));

program.parse(process.argv);
