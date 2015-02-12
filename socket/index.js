var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

//SERVE UI
app.get("/", function( req, res ){
	//res.send("Hello there!");
	res.sendFile( __dirname + '/index.html');
});


//Declare public repository
app.use(express.static(__dirname + '/lib'));

//LISTEN TO SOCKET CONNECTIONS
io.on('connection', function( socket ){
	//Handle user connection
	console.log( "A user connected!" );
	
	//Handle chat message sending
	socket.on("chat message", function( msg ){
		console.log( "message: " + msg );
	});
	
	//handle user disconnection
	socket.on('disconnect', function(){
		console.log("User Disconnected");
	});
});

io.on('connection', function(socket){
	  socket.broadcast.emit('hi');
	});

//hook the service on a port ( create a socket )
http.listen( 3000, function(){
	console.log("Listening on the default port!");
});