import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClient from "../../apiClient";
import EventCard from "../components/EventCard";

function SearchResult(){
    let { searchKey } = useParams()
    let [ events, setEvents ] = useState([]);

    async function getSearchData(){
        try {
            let res = await axiosClient.post(`/events/search`, {searchKey: searchKey})
            let data = res.data
            setEvents(data);
        } catch (error) {
            console.log(error)
            setEvents([])
        }
    }

    useEffect(()=>{
        getSearchData()
    }, [searchKey])

    return (
        <>
        {
            events.length > 0 ? (
                <div className="row g-2">
                    {
                        events.map( e => (
                            <div className="col-md-3" key={e._id}>
                                <EventCard event={e} />
                            </div>
                        ))
                    }
                </div>
            ) : (
                <h1 className="text-center">No Such Events</h1>
            )
        }
        </>
    )
}

export default SearchResult