#!/usr/bin/env node

import { promptProject } from "../src/prompts/project.js";
import { createProject } from "../src/scaffold/createProject.js";
import { setupGit } from "../src/git/setupGit.js";
import { setupCommitStandard } from "../src/commit/setupCommitStandard.js";

async function main() {

  console.log(`
   ______          __             __            _
  / ____/___  ____/ /__          / /_  ______  (_)___  _____
 / /   / __ \\/ __  / _ \\    __  / / / / / __ \\/ / __ \\/ ___/
/ /___/ /_/ / /_/ /  __/   / /_/ / /_/ / / / / / /_/ / /
\\____/\\____/\\__,_/\\___/    \\____/\\__,_/_/ /_/_/\\____/_/
`);

  const { projectName, tech } = await promptProject();

  const projectNameSafe = projectName
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, "-");

  await createProject(projectNameSafe, tech);

  process.chdir(projectNameSafe);

  setupGit();
  setupCommitStandard();

  console.log("\n✅ Projeto criado com padrão de commits da CodeJR!");
  console.log("👉 Use: npm run commit ou git cz\n");
}

main();

