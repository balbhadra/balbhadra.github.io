var http =require('http')

var server=http.createServer(function(req,res){
	res.writeHead(200,{"contextType":"text/html"})
	var name="balbhadra"
	var dob="15 april"
	var dept="MCA"
	res.write("name= "+name+"\ndob= "+dob+"\ndept= "+dept);
	res.end()
})
server.listen(8081)