var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = 3000;



  // app.use('/grid', express.static(__dirname + '/public/WIP/ImageGrid/'));

   app.use('/', express.static(__dirname + '/public'));
   app.use('/404', express.static(__dirname + '/public/404'));



server.listen(port, function() {
    console.log('server running on port:' + port);
});

