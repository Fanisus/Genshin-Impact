const fs = require('fs')
const path = require('path')
module.exports = function (req, res, next) {
    if (!fs.existsSync(`./html`)) {
        try {
            console.log("i love reks: " + req.url)
            res.sendFile(path.join(__dirname, "/error/404.html"), (err) => {
                if (err) {
                    console.log(err)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    else {
        try {

        } catch (error) {
            console.log(error)
        }
    }
}