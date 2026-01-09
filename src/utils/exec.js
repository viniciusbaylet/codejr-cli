import { execSync } from "child_process";

export function run(command, options = {}) {
  execSync(command, {
    stdio: "inherit",
    ...options,
  });
}
