var path = require('path');
var webpack = require('webpack');
// 打开浏览器 插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 生成模板 插件
var HtmlWebpackPlugin = require("html-webpack-plugin");
// //提取文本的插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    // 开发 配置
    devServer:{
        historyApiFallback:true, //开启 历史管理 到达某个目录 ,也就是 webpack --history-api-fallback  不用写了
        port:3333,// 设置开启服务的 端口号
        inline:true // 热更新 开启
    },
    // 入口
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:3333', // 服务器的名字，指定了下
            path.resolve(__dirname, 'app/index.js') // 启动服务时的 入口文件
        ],
        vendor: ['react', 'react-dom'] // 那一个进行 解析
    },
    // 出口
    output: {
        path: path.resolve(__dirname, 'build'), // 路径
        filename: "[name].js", // 文件名字是
        publicPath: '/' // 公共 路径 “/”  说明
    },
    // 解析那些 文件
    resolve: {
        extension: ['', '.jsx', '.js', '.json'],// 那些文件 后缀 的 自动补全
        // 提高webpack搜索的速度
        alias: { }
    },
    // 启动 开发工具 进行调试
    devtool: 'source-map',
    // 显示 错误的 细节
    'display-error-details': true,
    // 使用externals可以将react分离，然后用<script>单独将react引入
    externals: [],
    module: {
        // 使用module.noParse针对单独的react.min.js这类没有依赖的模块，速度会更快
        noParse: [
            path.resolve(node_modules, 'react/dist/react.min.js'),
            path.resolve(node_modules, 'react-dom/dist/react-dom..min.js')
        ],
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['react-hot', 'babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),// 启动 热更新 插件
        new webpack.NoErrorsPlugin(), // 启动 无 插件 错误
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        // 模板 渲染插件
        new HtmlWebpackPlugin({
            title: 'your app title',
            template: './app/index.html',
        }),
        // 打开浏览器插件
        new OpenBrowserPlugin({ url: 'http://localhost:3333' }),
        // t提取文本插件
        new ExtractTextPlugin("main.css", {
            // 所有块 用 启动
            allChunks: true,
            // 禁用 不启动
            disable: false
        }),
    ]
};