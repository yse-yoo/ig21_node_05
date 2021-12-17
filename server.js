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

io.on('connection', (socket) => {
    //クライアントからのデータ受信
    socket.on('message', (data) => {
        console.log(data)
        //すべてのクライアントにデータ送信
        io.emit('message', data)
    })
})

http.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})