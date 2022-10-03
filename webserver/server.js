console.log("Starting WebServer and API Server")
const express = require('express')
const path = require("path")
const fs = require('fs')
console.log("Connecting to Docker API Server")

const app = express()
app.use(function apiHandler(req, res, next) {
    if (req.path == '/api') {
        require('./api/api')(req, res, next)
        next()
    }
})
app.use(function websiteHandler(req, res, next) {
    if (req.path != '/api') return next()
    if (req.method === 'GET') {
        if (!fs.existsSync(`./website/html${req.path}`)) {
            res.sendFile("./website/error/404.html", (err) => {
                console.log(err)
            })
        }
    }
})

app.listen(2000)