var path = require('path');

module.exports = {
    entry: "./lib/js/app.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'js')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            { test: /\.html$/, loader: 'html-loader' },
            // {
            //     test: /\.(png|jpg|jpeg)$/,
            //     loader: 'url-loader',
            //     options: {
            //         name: './../pic/[name].[ext]',
            //     },
            // },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: './pic',

                },
            }
        ]
    },

}