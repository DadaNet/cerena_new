const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: './dist/',
            watch: true,
        },
        liveReload: true,
        watchFiles: ['src/**/*', 'dist/**/*'],
        port: 3000,
        open:true,
        hot:true,
    },
});