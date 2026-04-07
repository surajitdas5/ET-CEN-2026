import { Link } from "react-router-dom"
import { dateForamtter } from "../utils"

function EventCard({ event }){
    return (
        <div className="card">
            <img src={event.eventImage} alt="" className="card-img-top" style={{ height: '150px' }} />
            <div className="card-body">
                <h4 className="card-title">{event.title}</h4>
                <p>{dateForamtter(event.startDate)}</p>
                <Link to={`/event/${event._id}`} className="btn btn-sm btn-primary">Details</Link>
            </div>
        </div>
    )
}

export default EventCard