'use strict';

const Webpack = require('webpack');

const webpackConfig = require('../config/webpack.config.base');
const webpackConfigDev = require('../config/webpack.config.prod');

const {devServer, ...prodConfig} = webpackConfigDev;

process.env.NODE_ENV = prodConfig.mode;

/**
 * 使用webpack打包
 */
const compiler = Webpack(Object.assign({}, webpackConfig, prodConfig));

compiler.run((err) => {
  if (err) {
    console.log(err)
  }
});