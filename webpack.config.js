const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  plugins: [
    new ExtractCssChunks({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              publicPath: "/public/path/to/",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};

const ExtractCssChunks = require("extract-js-chunks-webpack-plugin");

module.exports = {
  plugins: [
    new ExtractJsChunks({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].js",
      chunkFilename: "[id].js",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              publicPath: "/public/path/to/",
            },
          },
          "js-loader",
        ],
      },
    ],
  },
};
