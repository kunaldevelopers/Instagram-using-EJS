const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
let port = 8080;

app.use(express.static(path.join(__dirname,"public/CSS")));
app.use(express.static(path.join(__dirname, "/public/JS")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/in/:username", (req, res)=>{
    let {username} = req.params;
    let instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("insta.ejs", {data});
    }else{
        res.render("error.ejs");
    }
})

app.listen(port, (req, res)=>{
    console.log(`Port is Listening at ${port}`);
});


