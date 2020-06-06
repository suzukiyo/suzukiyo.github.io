const webpack = require('webpack')
const path = require('path')
const { VueLoaderPlugin } = require("vue-loader")

const rootPath = path.resolve(__dirname, '../')

// config.base.js
module.exports = {
    entry: path.resolve(rootPath, './src/js/main.js'),
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: 'build.js'
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
        extensions: [".vue", ".js"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader",
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'dist/img',
                            publicPath: 'dist/img'
                        }
                    }
                ]
            }
        ]
    }
}