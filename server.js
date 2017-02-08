// variable declaration
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// GET If you want to create an index.html (optional)
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Socket.io connection
io.on('connection', function(socket){
  // listen is server ID for clients
  // data are the response data
  socket.on('listen', function(data){
    console.log('client connected');

    // Example 1: send broadcast for all clients ID 'user'
    io.emit('user', {name: 'Marcelo Aires'});

    // Example 2: send broadcast for all clients ID 'user2'
    io.emit('user2', 1);
  });

  // If some user disconnect
  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
});

// 9009: port that server is listening
http.listen(9009, function(){
  console.log('listening on *:9009');
});
