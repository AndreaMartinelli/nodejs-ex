"use strict";

var fs = require("fs"),         // to read static files
    http = require("http"),
    io = require("socket.io");
    
var app = http.createServer(handler);
io = io.listen(app);
app.listen(3001);
console.log("http server on port 3001");


function handler(req, res){
  //var agenciaParam = req.query[agencia];
  //console.log(agenciaParam);
  fs.readFile(__dirname + "/testeFec.html",
  function (err, data) {
    res.writeHead(200);
    res.end(data);
  });
}