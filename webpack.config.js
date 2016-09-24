const webpack = require("webpack")

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './app/Qwixx.jsx',
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/build/",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
        loaders: [
          // 'react-hot', 
          'babel?presets[]=es2015,presets[]=stage-2,presets[]=react,plugins[]=transform-decorators-legacy,plugins[]=react-hot-loader/babel'
        ]
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
