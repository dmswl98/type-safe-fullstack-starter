/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@type-safe-fullstack-starter/eslint-config-web/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
