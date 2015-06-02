var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = 3000;

app.use('/', express.static(__dirname + '/public'));

server.listen(port, function() {
    console.log('Yo. Website is up and the server is running at port:' + port);
});

