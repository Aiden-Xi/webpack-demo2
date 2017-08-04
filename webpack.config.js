const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js'
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
