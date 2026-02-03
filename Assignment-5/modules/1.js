const fs = require('fs')
const path = require('path')
// console.log(__dirname)
// console.log(__filename)
console.log("Start")

// fs.writeFile("info.txt", "Hello from nodejs",(err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Content Written");
//     }
// })

// fs.writeFileSync("info-1.txt", "New data")
// console.log("File created and content written")

// fs.readFile("info.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })


// console.log("end")

// let filePath = __dirname/info.txt
let filePath = path.join(__dirname, "info.txt")

console.log(filePath)