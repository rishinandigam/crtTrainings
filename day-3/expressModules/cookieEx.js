var  exp = require('express');

var ckparser = require('cookie-parser');

var app = exp();
app.use(ckparser());
app.get('/', (req, res) =>{
    res.set({'content-type':'text/html'});
    res.write(`/home to see the description<br>`);
    res.write(`/readCookies to read the cookies<br>`);
    res.write(`/displaycookies  to see the cookies <br>`);
    res.end(`/clearCookies to clear the mobile number cookie<br>`);
});
app.get('/home' , (req,res)=>{
    res.write(`<h1> This is the example to cookie reading and clearing</h1>`);
    res.end()
});
app.get('/readCookies', (req, res) =>{
    res.cookie('name' , 'rishi');
    res.cookie('branch' , 'information technology');
    res.cookie('mobile' , '7416041811');
    res.send("Cookies are readen successfully");

});


app.get('/displayCookies' , (req , res) =>{
    // res.type('.html')
    //  res.write(`<h1>The taken at the /readCookies</h1>`);
    console.log(req.cookies);
    res.send(req.cookies);


});

app.get('/clearCookies/', (req ,res ) =>{
    res.clearCookie('mobile');
    res.send("The cookie is cleared successfully.....");
    
});
app.listen(8080);
console.log("Server is runnig at the http://localhost:8080/ ......");