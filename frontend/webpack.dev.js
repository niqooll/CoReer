// webpack.dev.js
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, 'dist'),
        watch: true,
      },
      {
        directory: path.resolve(__dirname, 'src/public'),
        publicPath: '/icons', // ini supaya bisa diakses di /icons/...
        watch: true,
      },
    ],
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
});

