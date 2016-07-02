module.exports = {
  devtool: 'source-map',
  entry: "./app/Qwixx.jsx",
  output: {
    // filename: "public/bundle.js",
    filename: "bundle.js",
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  }
};
