const path = require('path');

module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.wasm$/, type: "asset/inline" },
    ],
  },
  output: {
    filename: 'xxdk.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
