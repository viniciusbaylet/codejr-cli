import chalk from "chalk";
import figlet from "figlet";

export function showBanner() {
  const codeLines = figlet.textSync("Code", {
    horizontalLayout: "default",
  }).split('\n');

  const juniorLines = figlet.textSync("Junior", {
    horizontalLayout: "default",
  }).split('\n');

  const lineCount = Math.max(codeLines.length, juniorLines.length);

  for (let i = 0; i < lineCount; i++) {
    const codePart = chalk.hex("#8b5cf6")(codeLines[i] || "");
    const juniorPart = chalk.yellow(juniorLines[i] || "");
    console.log(`${codePart}  ${ juniorPart }`);
  }

  console.log(
    chalk.yellow("=".repeat(80))
  );

  console.log(
    chalk.bold.white("   🚀  GERADOR DE PROJETOS | CODE JÚNIOR")
  );

  console.log(
    chalk.yellow("=".repeat(80))
  );
}
