import { run } from "../utils/exec.js";

export async function createProject(projectName, tech) {
  console.log(`\n🚀 Criando projeto ${projectName} (${tech})...\n`);

  switch (tech) {
    case "Next":
      run(`npx --yes create-next-app ${projectName}`);
      break;

    case "React Native":
      run(`npx --yes create-expo-app ${projectName}`);
      break;

    case "Laravel":
      run(
        `composer create-project laravel/laravel ${projectName} --no-interaction`
      );
      break;

    default:
      throw new Error("Tecnologia não suportada");
  }
}
