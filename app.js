const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("node:https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/signup.html")
});


app.request()
app.post("/", function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName , lastName , email);
});

app.listen(3000, function(){
    console.log("server is running at port 3000");
});