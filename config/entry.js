var glob = require('glob')
var path = require('path')

function getEntries() {
    return new Promise((reslove, reject) => {
        glob("./src/multi/**/index.js", function(err, files) {
            err && reject(err);
            // console.log(files)
            console.log(path.dirname(files[0]).split("/").slice(-1)[0])
            console.log(path.dirname(files[1]).split("/").slice(-1)[0])
            let entry = files.reduce((acc, current) => {
                let dirname = path.dirname(current).split("/").slice(-1).toString();
                console.log(dirname)
                acc[dirname] = current
                return acc
            }, {});
            console.log(entry)
            reslove(entry)
        })
    })
}
module.exports = getEntries