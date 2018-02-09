const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	/**
	 * 入口处文件打包成多文件
	 */
	entry: {
		index: './src/js/index.js',
		home: './src/js/home.js',
		home2: './src/js/home2.js'
	},
	/**
	 * 指定输入的文件路径
	 */
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [{
					loader: 'url-loader?limit=8192&name=img/[name].[ext]'
				},
				{
					loader: "file-loader?limit=8192&name=img/[name].[ext]"
				}
			]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: '', // An absolute path for the root  of webpack.config.js
			verbose: true, // Write logs to console.
			dry: false // Do not delete anything, good for testing.
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: __dirname + '/src/index.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'html/home.html',
			template: __dirname + '/src/html/home.html',
			inject: false,
		}),
		new HtmlWebpackPlugin({
			filename: 'html/home2.html',
			template: __dirname + '/src/html/home2.html',
			inject: false,
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
		})
	]
};