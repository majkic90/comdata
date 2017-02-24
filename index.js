var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 8080;

io.on('fontStyle', function(data){
    io.emit('fontStyle', data);
});

http.listen(PORT, function () {
    console.log('listen', PORT);
})