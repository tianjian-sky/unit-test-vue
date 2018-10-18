var HtmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin');

var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var rootPath = path.resolve(__dirname, './')
var _env = process.env.NODE_ENV
module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: rootPath + '/dist/' + _env,
        filename: '[name].js?[chunkhash]'
    },
    resolve: {
        extensions: ['.js', '.json', '.less', '.ejs'],
        alias: {
            '@bootstrap': path.resolve(rootPath, './node_modules/bootstrap/dist'),
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './template/index.html',
            inject: 'body',
            hash: false,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            chunksSortMode: 'dependency'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.vue$/,
            use: ['vue-loader']
        },
        {
            test: /\.ejs$/,
            use: 'ejs-loader'
        },
        {
            test: /\.css$/,
            use: ["style-loader", {loader: 'css-loader', options: {minimize: true}}, 'postcss-loader']
        },
        {
            test: /\.less$/,
            use: ["style-loader", {loader: 'css-loader', options: {minimize: true}}, 'postcss-loader', 'less-loader']
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: 'url-loader?limit=500000'
        },
        {
            test: /\.(ttf|svg|eot|woff|woff2)$/,
            use: ['file-loader']
        }
        ]
    }
}
