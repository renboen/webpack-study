const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const path = require('path')
module.exports = function() {
    return {
        mode: 'development',
        devtool: "source-map",
        entry: {
            a: './src/index.js',
            b: './src/test.js',
            c: './src/inline.js',
        },
        output: {
            path: path.resolve(__dirname + '/dist'),
            filename: 'js/[name].js',
            publicPath: "."
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/index.html",
                filename: "index.html",
                title: 'webpack is good',
                chunks: ['a', 'c'],
                inlineSource: 'c.js',

                selfContent: 'selfContent'
            }),
            new HtmlWebpackPlugin({
                template: "src/test.html",
                filename: "test.html",
                title: 'webpack is bad',
                excludeChunks: ['a'],
                inlineSource: 'c.js',
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
            // new HtmlWebpackInlineSourcePlugin(),
            new ScriptExtHtmlWebpackPlugin({
                inline: ['c.js'],
                // async: ['a.js'],
                defaultAttribute: "async"
            })
        ]
    }
}