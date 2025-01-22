var http = require('http');
var url = require('url');
http.createServer(function(req, res)
{
    if(req.url == "/")
        res.end("<h1>Home Page..</h1>");

    else if(req.url == "/about")
        res.end("<h1>About page.....</h1>");

    else if (req.url =- "/contact")
        res.end("<h1>contact page.........</h1>....")


}).listen(8080)


console.log("The home page is running at the http://localhost:8080/ ............")
console.log("The about page is running at the http://localhost:8080/about ............")
console.log("The contact page is running at the http://localhost:8080/contact ............")
