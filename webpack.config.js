const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const configureEnv = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((p, n) => {
    p[`process.env.${n}`] = JSON.stringify(env[n]);
    return p;
  }, {});

  return envKeys;
};

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "./index.js")],

  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: __dirname + "/public",
    publicPath: "/",
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "./views/index.html" })]
};
