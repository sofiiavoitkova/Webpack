const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  plugins: [
    new ESLintPlugin({
      cache: true,
      cacheLocation: "node_modules/.cache/eslint-webpack-plugin/.eslintcache",
      configType: "eslintrc",
      eslintPath: "eslint",
      extensions: ["js"],
      exclude: "node_modules",
      resourceQueryExclude: [],
      files: null,
      fix: false,
      formatter: "stylish",
      lintDirtyModulesOnly: false,
      threads: false,
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: false,
      quiet: false,
      outputReport: false,
    }),
  ],
};
