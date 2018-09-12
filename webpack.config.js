const webpack = require('webpack')

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
		'webpack/hot/only-dev-server',
		'./app/Qwixx.jsx',
	],
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build/',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]',
						},
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
}
