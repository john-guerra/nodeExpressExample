var express = require("express");
var fs = require("fs");
 

function loadTweets(callback) {
    fs.readFile("./tweets.json", "utf8", function(err, contents) {
        if (err) throw err;


        var tweets = JSON.parse(contents);
        console.log("I loaded " + tweets.length + " tweets");

        callback(tweets);
    });

        
}


var app = express();


app.use(express.static("public"));

app.get("/api", function(req, res) {
    loadTweets(function(tweets) {
        res.send(tweets);
    });
    
});



app.listen(3000, function () {
    console.log("Server listing for connections on port 3000");
});