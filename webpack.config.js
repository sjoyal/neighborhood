const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const node_dir = __dirname + '/node_modules';

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        app: ['babel-polyfill', './src/main'],
        vendor: ['react', 'react-dom', 'react-router'],
    },

    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, './build/'),
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'react'],
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash].js',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
    ],
};
