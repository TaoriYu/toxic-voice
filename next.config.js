const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const fsFix = () => ({
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config
  }
});

module.exports = withTypescript(withCSS({
  cssModules: true,
  webpack: fsFix(),
}));
