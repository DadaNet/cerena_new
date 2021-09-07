const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        js: './src/main.js',
        css: './src/style.css',
    },
    output: {
        publicPath: '/assets/',
        path: path.resolve(__dirname, 'dist/assets/'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
            {
                test: /\.js$/i,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, "node_modules"),
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, "node_modules"),
                ],
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    devServer: {
        static: 'dist',
        liveReload: true,
        port: 3000,
        open:true,
        hot:true,
    },
};
