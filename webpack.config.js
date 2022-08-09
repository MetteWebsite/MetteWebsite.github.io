const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  new ExtractCssChunks({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
];
if (devMode) {
  // only enable hot in development
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  plugins,
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
