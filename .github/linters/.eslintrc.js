module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "require-jsdoc": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "new-cap": "off",
    "@typescript-eslint/array-type": [
      "warn",
      { default: "array", readonly: "array" },
    ],
  },
};
