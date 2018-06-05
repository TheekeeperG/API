var express=require("express");

var app = express(); 

app.get("/", (req,res) => {
    res.send("get");
});


app.post("/", (req,res) => {
    res.send("post");
});


app.put("/", (req,res) => {
    res.status(500).send("put");
});


app.delete("/", (req,res) => {
    res.status(400).send("delete");
});

app.listen(3000);