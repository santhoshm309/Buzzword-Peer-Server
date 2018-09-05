(function() {
    
    module.exports = function(app, peerServer) {
        var router = require('./router.js')(peerServer);
        app.use('/peerjs-server', peerServer);
        app.use('/peer', router);
    }
    
})();