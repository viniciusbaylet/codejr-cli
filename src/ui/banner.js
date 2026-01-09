import chalk from "chalk";
import figlet from "figlet";

export function showBanner() {
  console.clear();

  const code = figlet.textSync("Code", {
    horizontalLayout: "default",
  }).replace(/\n$/, "");

  const junior = figlet.textSync("Junior", {
    horizontalLayout: "default",
  });

  const title = chalk.hex("#8b5cf6")(code) + chalk.yellow(junior);   

  console.log(title);

  console.log(
    chalk.hex("#8b5cf6")("=".repeat(80))
  );

  console.log(
    chalk.bold.yellow("   🚀  GERADOR DE PROJETOS | CODE JÚNIOR")
  );

  console.log(
    chalk.hex("#8b5cf6")("=".repeat(80))
  );

  console.log(
    chalk.yellow(">> Configuração Inicial\n")
  );
}
