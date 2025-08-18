// eslint.config.cjs
const js = require("@eslint/js");
const importPlugin = require("eslint-plugin-import");
const prettier = require("eslint-config-prettier");

module.exports = [
  // Ignora lo obvio
  { ignores: ["dist/**", "node_modules/**", ".idea/**", ".husky/**"] },

  // Reglas base de JS
  js.configs.recommended,

  // Tu capa del proyecto
  {
    files: ["**/*.{js,ts,jsx,tsx,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: { import: importPlugin },
    rules: {},
  },

  // Desactiva choques con Prettier (no formatea, solo evita conflictos)
  prettier,
];
