var express = require('express');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io').listen(server);



app.get('/', (req, res) => {

      res.sendFile(__dirname + '/index.html');
});

// server-side socket
io.sockets.on('connection', (socket) =>{
  socket.on('send message', (data) =>{
         console.log(data);
        // emit message to all users including sender
        //  io.sockets.emit('new message', data);
       
  });
})
server.listen(3000);
