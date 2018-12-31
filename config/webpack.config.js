const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
var glob = require('glob')
console.log(path.resolve(__dirname, "..") === path.resolve(__dirname, '../'), "--")
console.log(path.resolve(__dirname), "--")
var getEntries = require('./entry')
const output = require('./output')
const MODE = require('./mode')
const getPlugins = require('./plugin')
module.exports = async function(env) {
    let mode = MODE(env)
    let data = await getPlugins();
    return {
        context: path.resolve(__dirname, '../'), //用于从配置中解析入口起点(entry point)和 loader
        mode,
        devtool: "source-map",
        entry: getEntries,
        output,
        plugins: [
            new CleanWebpackPlugin('dist', {
                root: path.resolve(__dirname, "..")
            }),
            new HtmlWebpackPlugin({
                template: "./src/multi/pages/index/index.html",
                filename: "index.html",
                title: 'webpack is good',
                // chunks: ['index'],
                // inlineSource: 'c.js',
                selfContent: 'selfContent'
            }),
            new HtmlWebpackPlugin({
                template: "src/multi/pages/pageOne/index.html",
                filename: "pageOne.html",
                title: 'webpack is bad',
                // excludeChunks: ['index'],
                // inlineSource: 'c.js',
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
                async: ['a.js'],
                // defaultAttribute: "async"
            }),
        ]

    }
}