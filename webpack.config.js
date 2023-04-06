module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  output: {
    path:  `${__dirname}/dist`,
    filename: 'xxdk.js',
    library: 'XXDK',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: [/\.ts$/], loader: "ts-loader" },
      { test: /\.wasm$/, type: "asset/inline" },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
