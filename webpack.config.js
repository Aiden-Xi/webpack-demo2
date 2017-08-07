const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, './src')],
                exclude: [path.resolve(__dirname, './node_modules')],
                query: {
                    presets: ['latest']
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title: 'This is a.html'
        })
    ]
}


module.exports = config;
