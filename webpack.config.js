//Webpack Configuration
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        use: [
          // Creates "style" node from JS strings
          "style-loader",
          //  Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
