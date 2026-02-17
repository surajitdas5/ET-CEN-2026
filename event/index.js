import express from 'express'

import connectToDB from './utils/db.js'

import userRouter from "./routes/user.route.js"

const app = express()

app.use(express.json())

// routes
app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.use("/users", userRouter)

app.listen(5000, ()=>{
    console.log("Server started at 5000")
    connectToDB()
})