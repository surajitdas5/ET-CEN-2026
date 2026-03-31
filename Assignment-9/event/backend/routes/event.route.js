import express from 'express'

import {
    addEvent,
    allEvents,
    getEventById,
    searchEvent,
    updateEventImage
} from "./../controllers/event.controller.js"

import upload from '../middleware/fileUpload.middleware.js'

const router = express.Router()


router.post("/", upload.single("eventImage"), addEvent)
router.get("/", allEvents)
router.post("/search", searchEvent)
router.get("/:id", getEventById)
router.put("/update-image/:id", upload.single("eventImage"), updateEventImage)

export default router