module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      eqeqeq: "error",
      "no-unused-vars": "warn",
      "no-var": "error",
    },
    files: ["*.js"],
  },
];
