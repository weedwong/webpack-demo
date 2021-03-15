const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [path.join(__dirname, './../src/index.js')],
    output: {
        path: path.join(__dirname, './../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // 命中 JavaScript 文件
                test: '/\.(js|jsx)$/',
                // 用 babel-loader 转换 JavaScript 文件
                // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
                use: ['babel-loader'],
                // 只命中src目录里的js文件，加快 Webpack 搜索速度
                // include: path.resolve(__dirname, './src')
              },
              {
                // 命中 SCSS 文件
                test: /\.scss$/,
                // 使用一组 Loader 去处理 SCSS 文件。
                // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
                use: ['style-loader', 'css-loader', 'sass-loader'],
                // 排除 node_modules 目录下的文件
                exclude: path.resolve(__dirname, './node_modules'),
              },
              {
                // 对非文本文件采用 file-loader 加载
                test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
                use: ['file-loader'],
              },
              // 处理dva和history版本不兼容问题
              {
                test: [/index\.js$/],
                include: [require.resolve('../node_modules/dva-router-config/lib'),require.resolve('../node_modules/dva/lib')],
                loader: require.resolve('./loader/dva-config-loader'),
              }
        ]
    },
    plugins: []
}
