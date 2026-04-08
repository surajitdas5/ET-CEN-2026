import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axiosClient from "../../apiClient";
import { dateForamtter } from "../utils";
import { useAuth } from "../context/AuthContext";

function EventDetails(){
    let { eid } = useParams();
    let [ event, setEvent ] = useState(false);
    let { user } = useAuth()

    async function getEvent(){
        try {
            let res = await axiosClient.get(`/events/${eid}`)
            // console.log(res)
            let data = res.data
            console.log(data)
            setEvent(data)
        } catch (error) {
            console.log(error);
            setEvent(false);
        }
    }

    useEffect(()=>{
        getEvent()
    }, [])
    
    if(!event) return;

    return (
        <div className="row g-4">
            <div className="col-md-6">
                <img src={event.eventImage} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
                <h1>{event.title}</h1>
                <p>{event.description}</p>
                <p>Start Date: {dateForamtter(event.startDate)}</p>
                <p>End Date: {dateForamtter(event.endDate)}</p>
                <p>Location: {event.location}</p>
                <h5>Coordinator Details</h5>
                <p>Name: {event.user.name}</p>
                <p>mobile: {event.user.mobile}</p>
                {
                    user._id === event.user._id && (
                        <>
                            <Link to="/" className="btn btn-sm btn-outline-info me-2">Update Image</Link>
                            <Link to="/" className="btn btn-sm btn-outline-warning me-2">Update Event</Link>
                            <Link to="/" className="btn btn-sm btn-outline-danger me-2">Delete</Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default EventDetails