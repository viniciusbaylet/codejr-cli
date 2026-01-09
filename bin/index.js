#!/usr/bin/env node

import inquirer from "inquirer";
import { execSync } from "child_process";

const { projectName, tech } = await inquirer.prompt([
  { name: "projectName", message: "Nome do projeto:" },
  {
    name: "tech",
    message: "Tecnologia:",
    type: "list",
    choices: ["Next", "React Native", "Laravel"]
  }
]);

const projectNameSafe = projectName
  .toLowerCase()
  .replace(/[^a-z0-9-_]/g, "-");


if (tech === "Next") {
  execSync(`npx --yes create-next-app ${projectNameSafe}`, { stdio: "inherit" });
}

if (tech === "React Native") {
  execSync(`npx --yes create-expo-app ${projectNameSafe}`, { stdio: "inherit" });
}

if (tech === "Laravel") {
  execSync(`composer create-project laravel/laravel ${projectNameSafe} --no-interaction`, {
    stdio: "inherit"
  });
}
