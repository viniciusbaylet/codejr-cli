import fs from "fs";
import path from "path";
import { run } from "../utils/exec.js";

export function setupCommitStandard() {
  console.log("📦 Configurando padrão de commits da CodeJR...\n");

  // Dependências
  run(
    "npm install --save-dev husky @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog"
  );

  // commitlint.config.cjs
  fs.writeFileSync(
    "commitlint.config.cjs",
    `module.exports = {
  extends: ['@commitlint/config-conventional'],
};
`
  );

  // package.json
  const pkgPath = path.resolve("package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

  pkg.scripts ||= {};
  pkg.scripts.commit = "git cz";

  pkg.config ||= {};
  pkg.config.commitizen = {
    path: "cz-conventional-changelog",
  };

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  // Husky
  run("npx husky init");

  run(
    "npx husky add .husky/commit-msg \"npx --no-install commitlint --edit $1\""
  );
}
