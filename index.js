var io = require('socket.io').listen(8080);
io.on('fontStyle', function(data){
    io.emit('fontStyle', data);
});