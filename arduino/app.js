var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


var j5 = require("johnny-five");

app.use(express.static('../build'));


http.listen(3000, function () {
    console.log('listening on *:3000');

    var board = new j5.Board();
    var LEDPIN = 3;
    var BTNPIN = 'A5';
    var ledOn = false;
    var msg = 'OMG!';

    board.on("ready", function () {
        var led = new j5.Led(LEDPIN);
        var btn = new j5.Button(BTNPIN);

        btn.on("hit", function () {
            led.on();

            // välitä roskaa clientille
            io.emit('knitevent', 'Hello!');

            //io.on('connection', function (socket) {
            //    console.log('Hi!');
            //    socket.on('chat message', function (msg) {
            //        io.emit('chat message', msg);
            //    });
            //});

        });

        btn.on("release", function () {
            led.off();
        });
    });

});



