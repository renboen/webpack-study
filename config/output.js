var getEntries = require('./entry');
const path = require('path')
console.log(path.resolve(__dirname))
    // function output() {
    //     return new Promise((re, rj) => {
    //         getEntries().then(data => {
    //             console.log(data, 'output');
    //             console.log('output');
    //             re({
    //                 path: path.resolve(__dirname, "../dist"),
    //                 filename: 'js/[name]8.js',
    //                 publicPath: "."
    //             })
    //         })
    //     })
    // }
module.exports = {
    path: path.resolve(__dirname, "../dist"),
    filename: 'js/[name]8.js',
    publicPath: "."
}