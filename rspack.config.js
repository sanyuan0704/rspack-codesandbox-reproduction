const minifyPlugin = require("@rspack/plugin-minify");

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
  },
  optimization: {
    minimize: false,
    minimizer: [
      new minifyPlugin({
        minifier: "terser",
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
};
