var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'www');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {},
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loader : 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

module.exports = config;