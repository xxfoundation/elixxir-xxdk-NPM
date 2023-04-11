const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    publicPath: '',
    filename: 'xxdk.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'xxdk-js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.js', '.wasm']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.wasm$/,
        loader: 'wasm-loader'
      }
    ]
  }
};