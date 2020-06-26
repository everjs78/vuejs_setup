const appManifestPlugin = require('./src/appManifestPlugin');
const webpack = require('webpack');
const publicPath = '/';

module.exports = {
    publicPath,
    devServer: {
      //proxy: 'http://localhost:5000'
    },
    configureWebpack: {
      devtool: 'source-map',
      resolve: {
        alias: {
          //'vue$': require('path').resolve(__dirname, '../../node_modules/vue/dist/vue.runtime.esm.js')
        }
      },
      plugins: [
        appManifestPlugin(publicPath),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      ],
    }
  }
