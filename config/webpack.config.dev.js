const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    inline: true,
    publicPath: path.join(__dirname, './../dist/')
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        filename: '../index.html',
        template: path.join(__dirname, './../public/index.ejs')
    })
  ]
}