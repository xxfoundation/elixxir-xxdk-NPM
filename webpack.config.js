const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  target: 'web',
  plugins: [
		new NodePolyfillPlugin({
			includeAliases: ['crypto']
		})
	],
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
    publicPath: '',
    filename: 'xxdk.js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
  },
};
