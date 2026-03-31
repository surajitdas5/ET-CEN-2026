import { useEffect, useState } from "react"
import axiosClient from "../../apiClient"
import EventCard from "../components/EventCard"

function Home(){
    let [ events, setEvents ] = useState([])

    async function getEvents(){
        try {
            let res = await axiosClient.get("/events")
            let data = res.data
            console.log(data)
            setEvents(data)
        } catch (error) {
            console.log(error)
            setEvents([])
        }
    }

    useEffect(()=>{
        getEvents();
    }, [])

    return (
        <div className="row g-2">
            {
                events.map( e => (
                    <div className="col-md-3" key={e._id}>
                        <EventCard event={e} />
                    </div>
                ))
            }
        </div>
    )
}

export default Home