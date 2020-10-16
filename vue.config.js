const appManifestPlugin = require('./src/appManifestPlugin');
const webpack = require('webpack');
const publicPath = '/';

// get version from package.json
const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || 0;

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  publicPath,
  devServer: {
    proxy: {
      '/ui/v1': {
        target: 'http://192.168.1.22:8000',
        //target: 'http://localhost:8000',
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        vue$: require('path').resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      },
    },
    plugins: [
      appManifestPlugin(publicPath),
      new webpack.DefinePlugin({
        'process.env': {
          PACKAGE_VERSION: '"' + version + '"',
        },
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },

  // chainWebpack: (config) => config.resolve.symlinks(false),
  transpileDependencies: ['vuetify'],
};
