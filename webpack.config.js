const path = require("path");
const appPath = path.join(__dirname, "app");
const wwwPath = path.join(__dirname, "www");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const package_js = require("./package.json");
const webpack = require("webpack");


module.exports = {
    entry: ["babel-polyfill", path.join(appPath, "index.es6")],
    devtool: "source-map",
    output: {
        path: path.join(wwwPath),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "file-loader?name=templates/[name].html"
        }, {
            test: /\.(png|jpg)$/,
            loader: "file-loader?name=img/[name].[ext]" // inline base64 URLs for <=10kb images, direct URLs for the rest
        }, {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
        },  {
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
        }, {
            test: /\.(es6|js)$/,
            exclude: /(node_modules)/,
            loaders: ["ng-annotate?add=true", "babel-loader"]
        },

        // For Bootstrap
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
        { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },

        {
            test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
            loader: "file-loader?name=fonts/[name].[ext]"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            pkg: package_js,
            template: path.join(appPath, "index.html")
        }),

        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()

    ]
};
