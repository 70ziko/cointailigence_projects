const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'), // Serve from the 'src' directory
    },
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
};

