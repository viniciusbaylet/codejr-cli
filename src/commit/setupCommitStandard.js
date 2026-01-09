import fs from "fs";
import path from "path";
import { run } from "../utils/exec.js";

export function setupCommitStandard() {
    console.log("📦 Configurando padrão de commits da CodeJR...\n");

    // Instalar dependências
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

    // Atualizar package.json
    const pkgPath = path.resolve("package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

    pkg.scripts ||= {};
    pkg.scripts.prepare ||= "husky";
    pkg.scripts.commit = "git cz";

    pkg.config ||= {};
    pkg.config.commitizen = {
        path: "cz-conventional-changelog",
    };

    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

    // Inicializar Husky
    run("npx husky install");

    // Criar hook commit-msg corrtamente
    run('npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"');
}

