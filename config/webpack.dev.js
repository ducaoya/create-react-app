const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const { SERVER_PORT } = require('./constant');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: SERVER_PORT, // 指定端口，默认是8080
        // stats: 'errors-only', // 终端仅打印 error
        // clientLogLevel: 'silent', // 日志等级
        compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新
        historyApiFallback: true, // 当使用 HTML5 History API 时，任意的 404 响应都被替代为 index.html
        allowedHosts: 'auto', // 允许localhost、host和client.webSocketURL.hostname：
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});