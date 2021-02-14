var express = requere('express')
var path = requere('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname)))

var port = process.env.PORT || 5000
app.listen(port)
console.log('serve started' + port)