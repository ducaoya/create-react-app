const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob');
const { resolve } = require('path');
const common = require('./webpack.common');
const { PROJECT_PATH } = require('./constant');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    plugins: [
        // 清除dist目录
        new CleanWebpackPlugin(),
        // 抽离 css 单独打包并且去除无用 css 代码
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].chunk.css',
        }),
        // 去除无用样式
        new PurgeCSSPlugin({
            paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
            whitelist: ['html', 'body'],
        }),
    ],
    // 把一些引用的第三方包也打成单独的 chunk
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    compress: { pure_funcs: ['console.log'] },
                },
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 0,
        },
    },
});