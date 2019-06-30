// require dependencies 
var express = require("express");

// set up port to the host port or 3000
var PORT = process.env.PORT || 3000;

//initiate express app
var app = express();

//set up express router
var router = express.Router();

//designate public folder as static directory
app.use(express.static(__dirname + "/public"));

//make every request go through router middleware
app.use(router);

//listen on port
app.listen(PORT, function(){
    console.log("Listening on port:" + PORT);
});