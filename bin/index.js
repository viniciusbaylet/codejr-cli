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
  execSync(`npx create-next-app ${projectName} --yes`, { stdio: "inherit" });
}

if (tech === "React Native") {
  execSync(`npx create-expo-app ${projectName} --yes`, { stdio: "inherit" });
}

if (tech === "Laravel") {
  execSync(`composer create-project laravel/laravel ${projectName} --yes`, {
    stdio: "inherit"
  });
}
