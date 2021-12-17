const express = require('express')
const app = express()

const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

const dotenv = require('dotenv')
dotenv.config()
const host = process.env.HOST
const port = process.env.PORT

http.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})