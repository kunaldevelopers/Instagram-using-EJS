const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.set("views", path.join(__dirname, "views"));

app.get("/in/:username", (req, res)=>{
    let {username} = req.params;
    res.render("insta.ejs", {username});
    console.log(`Username is : ${username}`);
})

app.listen(port, (req, res)=>{
    console.log(`Port is Listening at ${port}`);
});