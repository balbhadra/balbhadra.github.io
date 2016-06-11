/**
 * Created by student on 6/11/2016.
 */
var express = require('express');
var app = express();
app.get('/',function(req,res){
   res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("hello hero")
});

app.listen(8080)
console.log("create server")