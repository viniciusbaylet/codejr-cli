#!/usr/bin/env node

import { promptProject } from "../src/prompts/project.js";
import { createProject } from "../src/scaffold/createProject.js";
import { setupGit } from "../src/git/setupGit.js";
import { setupCommitStandard } from "../src/commit/setupCommitStandard.js";
import { showBanner } from "../src/ui/banner.js";

async function main() {

  showBanner();

  const { projectName, tech } = await promptProject();

  const projectNameSafe = projectName
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, "-");

  await createProject(projectNameSafe, tech);

  process.chdir(projectNameSafe);

  setupGit();
  setupCommitStandard();

  console.log("\n✅ Projeto criado com padrão de commits da CodeJR!");
  console.log("👉 Para fazer commits use: npm run commit ou npx cz\n");
}

main();

