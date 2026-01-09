import inquirer from "inquirer";

export async function promptProject() {
  return inquirer.prompt([
    {
      name: "projectName",
      message: "Nome do projeto:",
      validate: (input) => input.trim().length > 0 || "O nome do projeto é obrigatório",
    },
    {
      name: "tech",
      message: "Tecnologia:",
      type: "list",
      choices: ["Next", "React Native", "Laravel"],
    },
  ]);
}
