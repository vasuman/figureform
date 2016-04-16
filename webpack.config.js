'use strict';

const path = require('path');

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: [
          ["transform-react-jsx", { pragma: "h" }]
        ]
      },
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  devServer: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
