const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DynamicCDNWebpackPlugin = require("dynamic-cdn-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  devServer: {
    contentBase: "./dist/",
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  entry: "./index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Chinese Number Conversion",
      template: "./index.ejs",
    }),
    new DynamicCDNWebpackPlugin(),
  ],
};
