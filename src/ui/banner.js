import chalk from "chalk";
import figlet from "figlet";

export function showBanner() {
  console.clear();

  const code =  chalk.hex("#8b5cf6")(figlet.textSync("Code", {
    horizontalLayout: "default",
  }).split('\n'));

  const junior =  chalk.yellow(figlet.textSync("Junior", {
    horizontalLayout: "default",
  }).split('\n'));

  const title = code + " " + junior;

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
}
