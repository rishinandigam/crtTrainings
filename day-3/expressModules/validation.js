var exp = require('express');
var path  = require('path');

var app = exp();
app.use(exp.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs');

app.set("views",path.join(__dirname, "views"));

app.get("/home", function(req,res){

    res.render('logform')


    res.end()
});



app.listen(8080);

console.log("The validation server is running at the http://localhost:8080/home  .........");
