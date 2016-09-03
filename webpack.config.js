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
          plugins: ['transform-decorators-legacy'],
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
            'style',
            'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'sass'
        ]
      }
    ]
  }
};
