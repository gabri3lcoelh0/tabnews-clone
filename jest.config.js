const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development",
});
const nextJest = require("next/jest");

const nextJestConfig = nextJest();
const jestConfig = nextJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
