const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin');
const path = require('path');

module.exports = function appManifestPlugin(publicPath) {
  if (publicPath === '/') {
    publicPath = '';
  }

  return new AppManifestWebpackPlugin({
    logo: path.resolve(__dirname, './assets/favicon.svg'),
    prefix: publicPath + (process.env.NODE_ENV === 'production' ? '/' : '/icons'),
    output: process.env.NODE_ENV === 'production' ? '/icons-[hash:8]/' : './icons/',
    config: {
      appName: 'Blocko Hub Manager',
      icons: {
        yandex: false,
        coast: false,
      },
    },
  });
};
