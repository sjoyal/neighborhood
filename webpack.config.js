import path from 'path';
import webpack from 'webpack';

const node_dir = __dirname + '/node_modules';

module.exports = {
  resolve: {
    alias: {
      lodash: node_dir + '/lodash',
      react: node_dir + '/react',
      reactDome: node_dir + '/react-dom'
    }
  },

  entry: {
    app: ['babel-polyfill', './src/main'],
    vendor: ['lodash', 'react', 'react-dom']
  },

  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].bundle.js'
  },

  module: {
    loaders: [
      { test: \/.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        query: {
          plugins: ['babel-plugin-transform-decorators-legacy'],
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      {
        test: \/.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}
