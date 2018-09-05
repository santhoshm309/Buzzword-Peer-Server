(function() {

    module.exports = function(peerServer) {

        var express = require('express');
        var router = express.Router();
        var bodyParser = require('body-parser');
        var JSON = require('circular-json');
        router.use(bodyParser.urlencoded({ extended: true }));
        router.use(bodyParser.json());
        router.use(bodyParser.json({type: 'application/vnd.api+json'}));


        
        
        router.get('/getConnectedDevices', function(req, res) {
            res.status(200).json(JSON.stringify(peerServer._clients));
        });

        return router;

    }




})();