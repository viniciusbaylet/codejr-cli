import chalk from "chalk";
import figlet from "figlet";

export function showBanner() {
  console.clear();

  const title = figlet.textSync("Code Junior", {
    horizontalLayout: "default",
  });

  console.log(chalk.cyan(title));

  console.log(
    chalk.gray("=".repeat(80))
  );

  console.log(
    chalk.bold.green("   🚀  GERADOR DE PROJETOS | CODE JÚNIOR\n")
  );

  console.log(
    chalk.gray("=".repeat(80))
  );

  console.log(
    chalk.yellow(">> Configuração Inicial\n")
  );
}
