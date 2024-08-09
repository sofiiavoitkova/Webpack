const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ESLintPlugin({
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        "node_modules/.cache/eslint-webpack-plugin/.eslintcache"
      ),
      overrideConfigFile: path.resolve(__dirname, "eslint.config.js"), // Use overrideConfigFile
      extensions: ["js"],
      exclude: "node_modules",
      fix: false, // If you want ESLint to fix issues automatically
      formatter: "stylish",
      lintDirtyModulesOnly: false,
      threads: false,
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: false,
      quiet: false,
    }),
  ],
};
