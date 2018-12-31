const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path')
console.log(path.resolve(__dirname, '.') === path.resolve(__dirname))
console.log(path.resolve(__dirname))
module.exports = async function(env) {
    return {
        context: path.resolve(__dirname, '.'), //用于从配置中解析入口起点(entry point)和 loader
        mode: "production",
        devtool: "source-map",
        entry: "./src/single/index.js",
        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: 'js/[name]8.js',
            publicPath: "."
        },
        plugins: (function() {
            return [
                new CleanWebpackPlugin("dist", {
                    root: path.resolve(__dirname, "..")
                }),
                new HtmlWebpackPlugin({
                    template: "./src/single/index.html",
                    filename: "test.html",
                    title: 'webpack is bad',
                    excludeChunks: ['a'],
                    // inlineSource: 'c.js',
                    selfContent: 'selfContent',
                    minify: {
                        collapseWhitespace: true,
                        removeComments: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        useShortDoctype: true
                    },
                    meta: {
                        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                        'theme-color': '#4285f4',
                        "X-UA-Compatible": {
                            "http-equiv": 'X-UA-Compatible',
                            "content": "ie=edge"
                        }
                    },
                }),
                new HtmlWebpackInlineSourcePlugin(),
                new ScriptExtHtmlWebpackPlugin({
                    // inline: ['c.js'],
                    // async: ['a.js'],
                    // defaultAttribute: "async"
                })
            ]
        })()
    }
}