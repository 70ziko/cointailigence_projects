const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseDir = '/' + path.basename(process.cwd()) + '/'

module.exports = {
  entry: {
    index: path.resolve(process.cwd(), 'frontend', 'src', 'index.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'frontend', 'src', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), 'backend', 'build'),
    publicPath: baseDir,
    clean: true,
  },
};