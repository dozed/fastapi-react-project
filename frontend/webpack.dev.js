const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        historyApiFallback: {
            disableDotRule: true,
        },
        proxy: {
            '/api': 'http://localhost:7000',
        },
    },
});
