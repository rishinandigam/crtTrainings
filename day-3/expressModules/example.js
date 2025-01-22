var exp = require('express')

var app = exp();


app.get("/" , function(req , res)
{

    res.set({'content-type': "text/html"});


    
    res.write(`<head>
    <title>Welcome Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            text-align: center;
            padding: 50px;
        }
        h1 {
            color: #4CAF50;
        }
        p {
            font-size: 20px;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Welcome!</h1>
    <p>Hello there! Welcome to our website.</p>
</body>
</html>
`)
    res.send("This is the first application in the express java script");
});

app.listen(8080);

console.log("Server is running at the http://localhost:8080/ ...............");


// this is the webpage that iam crated and used the send method 