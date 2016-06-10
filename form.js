var http = require('http')
var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("<doctype html>"+
		"<html lang=en>"+
	 "<head>"+ 
	 "<meta charset=UTF-8>"+
	 "<title>"+ 
	 "login page"+
	 "</title>"+

	 "</head>" +
	 "<body align='center'>"+ 
	 "<form action='post'>"+
	  "<h1 align center='center'>loginpage<h1>"+
		"User name"+ "<input type='text' name='uname'/>"+"<br><br>"+
		"password" +"<input type='password' name='pass'>"+
		"<button>"+"LOG IN"+"</button>"+
		"<form>"+
		"<body>"+
		"<html>"
		);
		res.end();
	})
	server.listen(8080)