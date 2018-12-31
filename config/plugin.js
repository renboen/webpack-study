const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
var getEntries = require("./entry");
let getPlugins = async() => {
    let entry = await getEntries();
    console.log(entry, "plugins");
}
module.exports = getPlugins