const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const env = process.env.NODE_ENV;
module.exports = merge(common, {
    devtool: 'eval-source-map',
    mode: 'development',
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '1 + 1'
        // })
    ]
})