const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    entry: './src/entry.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: 'dist/',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      minSize: 0 // This example is too small, in practice you can use the defaults
    },
  },
};