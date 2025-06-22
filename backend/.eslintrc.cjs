module.exports = {
  env: { node: true, es2022: true },
  extends: ["plugin:prettier/recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: { "no-console": "off" },
};
