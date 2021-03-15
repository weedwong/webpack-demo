'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const fs = require('fs');

const webpackConfig = require('../config/webpack.config.base');
const webpackConfigDev = require('../config/webpack.config.dev');

const {devServer, ...devConfig} = webpackConfigDev;

process.env.NODE_ENV = devConfig.mode;

const HOST = process.env.HOST || '0.0.0.0';

/**
 * 使用webpack打包
 */
const compiler = Webpack(Object.assign({}, webpackConfig, devConfig));

/**
 * 通过模板打包html时, 即HtmlWebpackPlugin.template
 * 首次启动WebpackDevServer时，访问不到index.html
 * 需要通过webpack编译一次生成index.html
 */
const hasHtml =  fs.existsSync('./../index.html');
if (hasHtml) {
  start()
} else {
  compiler.run((err) => {
    if (err) return;
    start()
  })
}


/**
 * 使用WebpackDevServer启动服务
 */

function start() {
  const server = new WebpackDevServer(compiler, devServer);
  
  server.listen(devServer.port, HOST, () => {
    console.log(`Starting server on http://${HOST}:${devServer.port}`);
  });
}