const path = require("path");
const nodeExternals = require("webpack-node-externals");

const server = {
  target: "node",
  entry: '/src/server.js',
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  node: "15.3.0",
                },
              }],
              '@babel/preset-react'
            ],
          },
        },
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals()],
  node: {
    __dirname: false
  }
};

const client = {
  target: "web",
  entry: {
    client: './src/public/index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist/public/"),
    filename: "[name].bundle.js"
  },
  optimization: {
    splitChunks: {
        chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
  }
};


module.exports = [client, server]