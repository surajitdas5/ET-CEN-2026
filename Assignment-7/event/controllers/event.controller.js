import Event from "../models/event.model.js";

async function addEvent(req, res) {
    try {
        // console.log(req)
        let newEvent = req.body
        // console.log(newEvent)
        newEvent.eventImage = req.file.filename
        newEvent = await Event.create(newEvent)
        res.send(newEvent)
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "Event not added", "error": error.message})
    }
}

async function allEvents(req, res){
    try {
        // let events = await Event.find()
        let events = await Event.find().populate("user", "-password")
        events.forEach( e => e.eventImage = "http://localhost:5000/uploads/"+e.eventImage)
        res.send(events)
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "Event not found", "error": error.message})
    }
}

async function updateEventImage(req, res){
    try {
        let { id } = req.params
        let eventImage = req.file.filename

        let event = await Event.findOneAndUpdate({_id: id}, {eventImage: eventImage}, { returnDocument: 'after'})
        if(event !== null){
            res.send({"message": "Image Updated"})
        } else {
            res.status(404).send({"message": "Event not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "Event image not updated", "error": error.message})
    }
}

export {
    addEvent,
    allEvents,
    updateEventImage
}