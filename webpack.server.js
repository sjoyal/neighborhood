const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');

const server = new WebpackDevServer(webpack(config), {
    contentBase: path.join(__dirname, './src/main'),
    historyApiFallback: true,
});

server.listen(8080, 'localhost');
