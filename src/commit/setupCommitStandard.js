import fs from "fs";
import path from "path";
import { run } from "../utils/exec.js";

export function setupCommitStandard() {
    console.log("📦 Configurando padrão de commits da CodeJR...\n");

    run(
        "npm install --save-dev husky @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog"
    );

    // commitlint.config.cjs
    fs.writeFileSync(
        "commitlint.config.cjs",
        `module.exports = {
  extends: ['@commitlint/config-conventional'],
  helpUrl:
    '\\n❌ Commit inválido.\\n' +
    '👉 Use: npm run commit\\n' +
    '👉 Ou use: npx cz\\n' +
    '📘 Padrão: Conventional Commits',
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

    // Cria pasta .husky 
    const huskyDir = path.resolve(".husky");
    if (!fs.existsSync(huskyDir)) {
        fs.mkdirSync(huskyDir);
    }

    // Cria hook commit-msg 
    const hookPath = path.join(huskyDir, "commit-msg");

    fs.writeFileSync(
        hookPath,
        `#!/bin/sh
npx --no-install commitlint --edit "$1"
`
    );

    // Permissão de execução (Linux/macOS)
    try {
        fs.chmodSync(hookPath, 0o755);
    } catch {
        // Windows ignora 
    }

    // Faz o git executar o husky para impedir commits fora do padrão
    run("git config core.hooksPath .husky");

}

