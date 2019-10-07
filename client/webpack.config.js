/* [filename] - [description]
 * [copyright]
 */

const webpack = require("webpack");
const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin");

const APP_DIR    = path.resolve(__dirname, "/src");
const EXPORT_DIR = path.resolve(__dirname, "/public");

module.exports = {
	entry: {
		app: "./src/index.jsx",
	},
	output: {
		path: EXPORT_DIR,
		filename: "[name].bundle.js",
		publicPath: "/"
	},
	devServer: {
		historyApiFallback: true,
		port: 8080
	},
	plugins: [
		new htmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
        })
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env","@babel/preset-react"]
					}
				}
			},
			{
				test: /\.css$/,
				use: ["css-loader", "style-loader"]
			},
			{
				test: /\.(sass|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"]
			}
		]
	}	
};
