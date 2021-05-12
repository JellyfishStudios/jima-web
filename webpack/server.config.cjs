const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require('webpack');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    target: "node",
    entry: './src/server.js',
    output: {
      path: path.resolve(__dirname, "../dist/"),
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
      __dirname: true, 
      __filename: true 
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode)
      }),
    ]
  };
};