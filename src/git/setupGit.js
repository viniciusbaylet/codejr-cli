import fs from "fs";
import { run } from "../utils/exec.js";

export function setupGit() {
  if (!fs.existsSync(".git")) {
    console.log("📁 Inicializando repositório Git...\n");
    run("git init");
  }
}
