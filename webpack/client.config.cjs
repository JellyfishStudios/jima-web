const path = require("path");
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: {
      client: argv.mode === "development"
        ? ["webpack-hot-middleware/client?reload=true", './src/public']
        : './src/public'
    },
    output: {
      path: path.resolve(__dirname, "../dist/public/"),
      publicPath: "/public/",
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
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                argv.mode === "development" && require.resolve('react-refresh/babel')
              ].filter(Boolean)
            }
          }
        },
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin({ 
        overlay: { 
          sockIntegration: "whm" 
        } 
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode)
      })
    ]
  };
};