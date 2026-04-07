import express from "express";

import {
    addUser,
    allUsers,
    deleteUser,
    getUserById,
    updateUser,
    loginUser,
    logout,
    getCurrentUser
} from "./../controllers/user.controller.js"

import logger from "../middleware/logger.middleware.js";
import auth from "../middleware/auth.middleware.js";

let router = express.Router();

router.post("/", addUser)
router.post("/login", loginUser)

router.get("/", logger, auth, allUsers)
router.get("/logout", auth, logout)
router.get("/current-user", auth, getCurrentUser)
router.get("/:id", logger, auth, getUserById)


router.put("/:id", auth, updateUser)

router.delete("/:id", auth, deleteUser)


export default router