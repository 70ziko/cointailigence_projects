const { merge } = require('webpack-merge');
const generic = require('./webpack.config.gen.js');
const path = require('path');

const baseDir = '/' + path.basename(process.cwd()) + '/'

module.exports = merge(generic, {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: ["**/node_modules"],
    poll: 1000
  },
  devServer: {
    historyApiFallback: {
      index: baseDir
    },
    open: [baseDir],
    port: 80,
  },
});