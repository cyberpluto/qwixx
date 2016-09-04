module.exports = {
  devtool: 'source-map',
  entry: "./app/Qwixx.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-2']
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
