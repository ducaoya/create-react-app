module.exports = {
    presets: [
        [
            '@babel/preset-env', //据设置的目标浏览器环境找出所需的插件去转译 ES6+ 语法
            {
                modules: false,
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime', //解决一些新特性，比如 includes
            {
                corejs: {
                    version: 3,
                    proposals: true,
                },
            },
        ],
    ],
};