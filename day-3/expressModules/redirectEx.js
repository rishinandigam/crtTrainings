var exp = require('express');
var path  = require('path');

var app = exp();



app.get('/sasi', (req , res ) => {
    res.redirect('http://www.sasi.ac.in/');
    console.log("The page is redirected to the sasi website ");


    res.end()

})
app.listen(8080);
console.log("The validation server is redirecting to the http://localhost:8080/sasi  .........");