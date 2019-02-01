var express = require("express");



var app = express();


app.get("/", function(req, res) {
	console.log("Request on /");
	res.send("Hola World!");
});


app.listen(3000, function () {
	console.log("Server listing for connections on port 3000");
});