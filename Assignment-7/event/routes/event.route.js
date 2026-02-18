import express from 'express'

import {
    addEvent,
    allEvents,
    updateEventImage
} from "./../controllers/event.controller.js"

import upload from '../middleware/fileUpload.middleware.js'

const router = express.Router()


router.post("/", upload.single("eventImage"), addEvent)
router.get("/", allEvents)
router.put("/update-image/:id", upload.single("eventImage"), updateEventImage)

export default router