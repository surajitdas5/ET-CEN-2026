import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axiosClient from "../../apiClient";
import { dateForamtter } from "../utils";

function EventDetails(){
    let { eid } = useParams();
    let [ event, setEvent ] = useState(false);

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

            </div>
        </div>
    )
}

export default EventDetails