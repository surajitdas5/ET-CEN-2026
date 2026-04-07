import mongoose from "mongoose";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken"

async function addUser(req, res) {
    try {
       let newUser = req.body

       let user = await User.findOne({email: newUser.email})
       if(user){
        return res.status(400).send({"message": "Email is already taken"})
       }

       newUser = await User.create(newUser) 
       res.status(201).send(newUser)
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "User not added", "error": error.message})
    }
}

async function allUsers(req, res){
    try {
        let users = await User.find()
        res.send(users)
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "Error", "error": error.message})
    }
}

async function getUserById(req, res){
    try {
        let { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send({"message": "Invalid ID"})
        }

        let user = await User.findOne({_id: id})
        if(user){
            res.send(user)
        } else {
            res.status(404).send({"message": "User not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "user not found", "error": error.message})
    }
}

async function updateUser(req, res){
    try {
        let { id } = req.params
        let updatedUser = req.body

        updatedUser = await User.findOneAndUpdate({_id: id}, updatedUser, {returnDocument: "after"})
        if(updatedUser !== null){
            res.send(updatedUser)
        } else {
            res.status(404).send({"message": "User not found"})
        }
    } catch (error) {
       console.log(error)
        res.status(400).send({"message": "user not Updated", "error": error.message})
    }
}

async function deleteUser(req, res){
    try {
        let { id } = req.params

        let user = await User.findOneAndDelete({_id: id})
        if(user !== null){
            res.send({"message": "User Deleted"})
        } else {
            res.status(404).send({"message": "User not found"})
        }
    } catch (error) {
       console.log(error)
        res.status(400).send({"message": "user not Updated", "error": error.message})
    }
}

// auth functions
async function loginUser(req, res){
    try {
        let { email, password } = req.body
        let user = await User.findOne({ email: email })
        if(user){
            if(user.password == password){
                let token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET, { expiresIn: '1d' })
                res.cookie('token', token, {
                    htppOnly: true,
                    secure: false,
                    maxAge: 86400 * 1000 // milis: 1 day
                })
                res.send(user)
            } else {
                res.status(401).send({message: "Invalid Password"})
            }
        } else {
            res.status(404).send({message: "Invalid Email"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "user not logged in", "error": error.message})
    
    }
}

async function logout(req, res){
    try {
        res.clearCookie('token')
        res.send({message: "Logged Out"})
    } catch (error) {
        console.log(error)
        res.status(500).send({"message": "user not logged out", "error": error.message})
    }
}

async function getCurrentUser(req, res){
    try {
        let { id } = req.user
        let user = await User.findOne({_id: id}).select('-password')
        if(user){
            res.send(user)
        } else {
            res.status(404).send({message: "User not found"});
        }
    } catch (error) {
        console.log(error)
        res.status(404).send({"message": "user not found", "error": error.message})
    }
}

export {
    addUser,
    allUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser,
    logout,
    getCurrentUser
}