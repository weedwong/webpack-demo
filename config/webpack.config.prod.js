const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        filename: 'index.html',
        template: path.join(__dirname, './../public/index.ejs')
    })
  ]
}