import express from "express";

import {
    addUser,
    allUsers,
    deleteUser,
    getUserById,
    updateUser
} from "./../controllers/user.controller.js"

let router = express.Router();

router.post("/", addUser)
router.get("/", allUsers)
router.get("/:id", getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)


export default router