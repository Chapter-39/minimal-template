#!/usr/bin/env node
const { spawnSync } = require("node:child_process");

const args = process.argv.slice(2);
const targetArgs = args.length > 0 ? args : ["."];
const result = spawnSync("npx", ["--no-install", "prettier", "--write", ...targetArgs], {
  stdio: "inherit",
});
process.exit(result.status ?? 0);
