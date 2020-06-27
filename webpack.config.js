const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: ["./client/index.js"],
  },
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: /node-modules/,
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.scss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
    publicPath: "/build/",
    contentBase: "./",
    // contentBase: path.join(__dirname, "./client"),
    proxy: {
      "/": "http://localhost:3000/",
    },
  },
};
