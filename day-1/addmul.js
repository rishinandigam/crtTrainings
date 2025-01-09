
var http = require("http");
http.createServer(function(req , res ) 
{
    const number1 = 100
    const number2 = 400
    res.writeHead(404, {'content-type' : 'text/html'});
    res.write(`<h2 style = "color : red";
        
        >The sum of two numbers is :</h2> `+(number1+number2));

        res.write(`<style>
            body
            {
            background-color : lightgreen; 
            }
            </style>`)
    res.end( `<h2>The product of two numbers is : </h2>`+(number1*number2) );
}).listen(8080);

console.log("The server for add and multiply is running at the http://localhost:8080.......");