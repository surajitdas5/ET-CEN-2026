const express = require('express')
const path = require('path')

const server = express();
server.use(express.static(path.join(__dirname, "asset")))

// routes
server.get("/", (req, res)=>{
    // res.send("<h1>Home</h1>")
    // res.sendFile("public/index.html") // error
    res.sendFile(path.join(__dirname, "public/index.html"))
})

server.get("/about", (req, res)=>{
    // res.send("<h1>About Page</h1>")
    res.sendFile(path.join(__dirname, "public/about.html"))
})

server.listen(5000, ()=>{
    console.log("Express Server Started")
})