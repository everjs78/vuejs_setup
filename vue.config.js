const appManifestPlugin = require('./src/appManifestPlugin');
const webpack = require('webpack');
const publicPath = '';

module.exports = {
  publicPath,
  devServer: {
    proxy: 'https://localhost:8000',
  },

  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        //'vue$': require('path').resolve(__dirname, '../../node_modules/vue/dist/vue.runtime.esm.js')
      },
    },
    plugins: [appManifestPlugin(publicPath), new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
  },

  chainWebpack: (config) => config.resolve.symlinks(false),
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
