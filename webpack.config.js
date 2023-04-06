module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'xxdk.js',
    library: 'XXDK',
    libraryTarget: 'es6'
  },
  module: {
    rules: [
      { test: [/\.ts$/], loader: "ts-loader" },
      { test: /\.wasm$/, type: "asset/inline" },
    ],
  },
};
