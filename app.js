var exp = require("express");
var app = exp(); 

var api = require("./routes/api2"); 

app.use("/api", api);

app.get("/",(req,res)=>{

    res.send("<h1>PAGINA PRINCIPAL</h1>");
});

app.listen(3000, () => {

    console.log("corriendo");
});