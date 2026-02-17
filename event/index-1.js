import express from 'express'

const app = express()

app.use(express.json())

// routes
app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get("/users", (req, res)=>{
    let users = [{name: "John"}, {name: "Jane"}]
    res.send(users)
})

app.get("/users/:id", (req, res)=>{
    // console.log(req)
    let { id } = req.params
    // Some Operation
    res.send(`Data of ${id}`)
})

app.post("/users", (req, res)=>{
    let user = req.body
    console.log(user)
    res.status(201).send("User Added")
})

app.put("/users/:id", (req, res)=>{
    let updatedUser = req.body
    let { id } = req.params
    console.log(updatedUser)
    console.log(id)
    res.send(`Data updated for ${id}`)
})

app.delete("/users/:id", (req, res)=>{
    let { id } = req.params
    res.send(`Data of id ${id} is deleted`) 
})

app.listen(5000, ()=>{
    console.log("Server started at 5000")
})