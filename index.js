const express = require("express");
const app =express();
const port = process.env.port || 3000;
const path = require("path");
const qrcode = require("qrcode");

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs")
app.use(express.static("public"));

//app.set("views",path.join(__dirname,"view"))

app.get("/",(req,res,next)=>{
    res.render("index")
})

app.post("/scan",(req,res,next)=>{
     const input_text = req.body.text;
    
     
     qrcode.toDataURL(input_text,(err,src)=>{
        res.render("scan",{
            qr_code:src
        })
    
     })
    

})


app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})