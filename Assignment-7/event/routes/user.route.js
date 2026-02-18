import express from "express";

import {
    addUser,
    allUsers,
    deleteUser,
    getUserById,
    updateUser
} from "./../controllers/user.controller.js"

import logger from "../middleware/logger.middleware.js";

let router = express.Router();

router.post("/", addUser)
router.get("/", logger, allUsers)
router.get("/:id", logger, getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)


export default router