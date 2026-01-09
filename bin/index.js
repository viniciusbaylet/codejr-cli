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

if (tech === "Next") {
  execSync(`npx --yes create-next-app ${projectName}`, { stdio: "inherit" });
}

if (tech === "React Native") {
  execSync(`npx --yes create-expo-app ${projectName}`, { stdio: "inherit" });
}

if (tech === "Laravel") {
  execSync(`composer create-project laravel/laravel ${projectName} --no-interaction`, {
    stdio: "inherit"
  });
}
