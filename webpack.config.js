const path = require('path');
const webpack = require('webpack');

const node_dir = __dirname + '/node_modules';

module.exports = {
    devtool: 'eval-source-map',

    resolve: {
        alias: {
            react: node_dir + '/react',
            reactDom: node_dir + '/react-dom',
        }
    },

    entry: {
        app: ['babel-polyfill', './src/main'],
        vendor: ['react', 'react-dom'],
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].module.js',
        publicPath: 'http://localhost:8080/dist/',
    },

    module: {
        loaders: [
            { test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['babel-plugin-transform-decorators-legacy'],
                    presets: ['es2015', 'stage-1', 'react'],
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
            }
        ]
    },

    devServer: {
        contentBase: './src',
        publicPath: 'http://localhost:8080/dist/',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};
