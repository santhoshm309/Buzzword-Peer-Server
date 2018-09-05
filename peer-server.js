(function(){

    var express = require('express');

    var expressPeerServer = require('peer').ExpressPeerServer;

    var app = express();

    var logger = require('morgan');

    app.use(logger('dev'));

    // var routes = require('./routes/index.js')(app);

    var server = app.listen(3443);

    var options  = {
        debug : true
    }

    var peerServer = expressPeerServer(server, options);
    
    
    var routes = require('./index.js')(app, peerServer); 
    

    console.log("Server is running at port 3443");

    module.exports = app;


})();
