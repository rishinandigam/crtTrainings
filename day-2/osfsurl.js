const http = require('http')
const url = require('url')
const fs = require('fs')
http.createServer(function(req ,res)
{
    var q = url.parse(req.url , true);
    var filename = "."+q.pathname
    console.log(filename)
    fs.readFile(filename, function(err ,data){
        if(err)
        {
            res.writeHead(404, {"content-type ":"text/html"});
            res.write("404 NOT FOUND");

        }

        res.writeHead(200, {"content-type":"text/html" });
        res.write(data);
        res.end(req.url);
    })

}).listen(8080);
console.log("Server is running at the http://localhost:8080/summer.html .......")

console.log("Server is running at the http://localhost:8080/winter.html .......")
console.log("Server is running at the http://localhost:8080/winte.html .......")

