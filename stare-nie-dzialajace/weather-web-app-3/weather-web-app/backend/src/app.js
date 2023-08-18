const express = require('express')
const path = require('path')
const app = express()

const hgi_express = require('hgi-express')

app.use(express.json())
app.use(hgi_express.debugMiddleware)

const basePath = '/' + path.basename(process.cwd())

app.use(basePath + '/api', require('./api'))

app.use(hgi_express.errorMiddleware)
app.use(hgi_express.notFoundMiddleware)

app.listen(80, () => console.log('Listening on port 80!'))