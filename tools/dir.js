const fs = require('fs')

//生成文件夹
const dir = path => {
    fs.exists(path, exists => {
        if (exists) {
            return path
        } else {
            fs.mkdir(path, (err, dir) => {
                if(err) throw err
                return path
            })
        }
    })

    return path
}

module.exports = dir