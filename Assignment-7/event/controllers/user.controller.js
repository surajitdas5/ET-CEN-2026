import mongoose from "mongoose";
import User from "../models/user.model.js";

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

export {
    addUser,
    allUsers,
    getUserById,
    updateUser,
    deleteUser
}