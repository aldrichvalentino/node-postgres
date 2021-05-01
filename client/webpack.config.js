const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {

  // webpack will take the files from ./src/index
  entry: './index',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
    },
  },

  module: {
    rules: [

      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new Dotenv(),
  ]
};
