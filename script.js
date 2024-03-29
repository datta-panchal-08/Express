const express = require('express')
const app = express()

app.set("view engine","ejs");

app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.render("index",{name:"datta"})
});

app.get("/about",(req,res)=>{
   res.render('about',{name : "datta"})
});

app.get("/profile/:username",(req,res)=>{
    res.send(`hello from ${req.params.username}`)
});

app.get("/error",(req,res,next)=>{
     throw Error("Something Went Wrong !")
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000);
