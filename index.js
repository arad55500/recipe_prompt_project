// set up ejs express and body parser
//

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const axios = require("axios");

const app = express();

app.set("view engine", "ejs");  
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index.ejs");
})

app.post("/recipe", function(req, res){
    const recipe = req.body.recipe;
    res.render("index.ejs", {recipe: recipe});
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
})