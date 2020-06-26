const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: ["./client/index.js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "node-modules"),
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
    publicPath: "/build/",
    contentBase: path.join(__dirname, "./client"),
    proxy: {
      "/": "http://localhost:3000",
    },
  },
};
