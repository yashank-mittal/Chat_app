const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.use('/',express.static(path.join(__dirname,'/public')));

const user ={}

io.on('connection',(socket) => {
    socket.on('login',(data) => {
        user[socket.id]=data.name
    })

    socket.on('send-msg',(data) => {
        io.emit('recevied_msg',{
            msg: data.msg,
            name: user[socket.id]
        })
    })
})


server.listen(3001,() => {
    console.log('running');
})