const express = require('express'),
      app = express(),
      routes = require('./routes/index')
      config = require('./config/index')
      bodyParser = require('body-parser')
      path = require('path')
      http = require('http')
      port = 3001
      server = http.createServer(app)
      io = require('socket.io')(server)

app.use(bodyParser.json());
app.use('/api', routes);

server.listen(port, () => 'Listening API on port: ' + port);

// io.on('connection', function (socket) {
//
//       socket.emit('connection', { status: true });
//
//       socket.on('my', function (data) {
//             console.log(data);
//       });
// });

let chat = io
    .of('/chat')
    .on('connection', function (socket) {

      socket.emit('connection', { chat: true });

      socket.emit('a message', {
            that: 'only',
            '/chat': 'will get'
      })

      chat.emit('a message', {
            everyone: 'in'
            ,'/chat': 'will get'
      });
});



module.exports = app


