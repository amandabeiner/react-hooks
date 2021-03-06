const path = require("path")
const webpack = require("webpack")
const dotenv = require("dotenv")

const configureEnv = () => {
  const env = dotenv.config().parsed

  const envKeys = Object.keys(env).reduce((p, n) => {
    p[`process.env.${n}`] = JSON.stringify(env[n])
    return p
  }, {})

  return envKeys
}
module.exports = {
  entry: ['babel-polyfill', "./src/index.js"],
  mode: "development",
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
  output: {
    path: path.resolve(__dirname, "public/"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin({ tempalte: 'public/index.html'}), new webpack.DefinePlugin(configureEnv())]
};
