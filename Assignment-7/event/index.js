import "dotenv/config";
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'node:url';

import connectToDB from './utils/db.js'

import userRouter from "./routes/user.route.js"
import eventRouter from "./routes/event.route.js"

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// routes
app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.use("/users", userRouter)
app.use("/events", eventRouter)

app.listen(5000, ()=>{
    console.log("Server started at 5000")
    connectToDB()
})