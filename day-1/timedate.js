var todayDate = new Date()

var http = require("http")
http.createServer(function(req, res)
{   res.writeHead(200, {'content-type': 'text/html'});
    res.write("Now i am going to display today date on browser....... ");
    console.log("The current Date and Time is : " +todayDate);
    res.write("<h1> The Current Time is : </h1>"+todayDate)
;
}).listen(8080);

console.log("Server is running at the http://localhost:8080 ..........")