//var database = require ('mongodb');
//var mysql = require ('mysql');
var redis = require('redis').createClient();

module.exports = function handler(req, res) {
    if (req.url == '/') {

        redis.get('data', function(err, data) {

           throw new Error("redis callback"); //

        });

    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }

};