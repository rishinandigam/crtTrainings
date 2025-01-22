
var exp = require('express')

var app = exp();
app.get('/', function(req , res){
    // res.attachment('sample.txt');
    // console.log(res.get('Content-Deposition'));
    res.append('products' , ['Televisoin', 'laptop', 'mobilephones'])
    res.write('products')
    console.log(res.get('products'));
    res.end();
});

app.listen(8080);
console.log("Server is running at the http://localhost:8080/ .........");

