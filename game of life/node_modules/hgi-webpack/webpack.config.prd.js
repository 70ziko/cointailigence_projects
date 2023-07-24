const { merge } = require('webpack-merge');
const common = require('./webpack.config.gen.js');

module.exports = merge(common, {
  mode: 'production',
});