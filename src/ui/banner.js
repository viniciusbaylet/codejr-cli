import chalk from "chalk";
import figlet from "figlet";

export function showBanner() {
  console.clear();

  const title =  chalk.hex("#8b5cf6")(figlet.textSync("Code Junior", {
    horizontalLayout: "default",
  }));

  console.log(title);

  console.log(
    chalk.yellow("=".repeat(80))
  );

  console.log(
    chalk.bold.yellow("   🚀  GERADOR DE PROJETOS | CODE JÚNIOR")
  );

  console.log(
    chalk.yellow("=".repeat(80))
  );
}
