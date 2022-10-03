const express = require('express')
const path = require("path")
const fs = require('fs')

const app = express()

app.use(function requestHandler(req, res, next) {
    console.log(req.url)
    if (req.path.endsWith("favicon.ico")) {
        res.sendFile(path.join(__dirname, "favicon.ico"))
    }

    if (req.path == '/api') {
        require('./api/api')(req, res, next)
        next()
    }

    else {
        require('./website/website')(req, res, next)
    }

})

app.listen(1647)
console.log("Started WebServer and API Server")