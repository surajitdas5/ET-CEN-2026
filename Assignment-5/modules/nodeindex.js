const http = require("http")
const fs = require('fs')

const server = http.createServer((req, res)=>{
    
    let url = req.url
    // console.log(url)

    if(url == "/"){
        // res.write("<h1>Home Page</h1>");
        // res.end();
        fs.readFile("public/index.html", "utf-8", (err, data)=>{
            if(err){
                res.write("<h1>500: Internam Server Error</h1>");
            } else {
                res.write(data)
            }
            res.end()
        })
    } else if( url == '/about'){
        // res.write("<h1>About Page</h1>");
        // res.end();
        fs.readFile("public/about.html", "utf-8", (err, data)=>{
            if(err){
                res.write("<h1>500: Internam Server Error</h1>");
            } else {
                res.write(data)
            }
            res.end()
        })
    } else {
        res.write("<h1>404: page not found</h1>");
        res.end();
    }
})

server.listen(5000, ()=>{
    console.log("Server Started")
})