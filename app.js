//Express
const express = require("express");
const app = express();
app.use(express.static("public"));

//Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//HTTPS
const https = require("https");

//Request
const request = require("request");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    res.write("<h1>First Name: " + firstName + "</h1>");
    res.write("<h1>Last Name: " + lastName + "</h1>");
    res.write("<h1>Email: " + email + "</h1>");

    res.send();
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});