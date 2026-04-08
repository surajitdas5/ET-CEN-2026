import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import axiosClient from '../../apiClient';

function AddEvent() {
    let [message, setMessage] = useState("");
    let { user } = useAuth()

    let titleRef = useRef(null)
    let descriptionRef = useRef(null)
    let startDateRef = useRef(null)
    let endDateRef = useRef(null)
    let locationRef = useRef(null)
    let statusRef = useRef(null)
    let imageRef = useRef(null)

    const handleSubmit = async(e) => {
        e.preventDefault();
        let title = titleRef.current.value
        let description = descriptionRef.current.value
        let startDate = startDateRef.current.value
        let endDate = endDateRef.current.value
        let status = statusRef.current.value
        let location = locationRef.current.value
        let image = imageRef.current.files[0]

        let formData = new FormData();
        formData.append("title", title)
        formData.append("description", description)
        formData.append("startDate", startDate)
        formData.append("endDate", endDate)
        formData.append("status", status)
        formData.append("location", location)
        formData.append("eventImage", image)
        formData.append("user", user._id)

        // console.log(formData)
        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }

        titleRef.current.value = ""
        descriptionRef.current.value = ""
        startDateRef.current.value = ""
        endDateRef.current.value =""
        statusRef.current.value =""
        locationRef.current.value =""

        try {
            let res = await axiosClient.post("/events", formData)
            setMessage("Event Added");
        } catch (error) {
            console.log(error.response)
            setMessage(error?.response?.data?.message)
        }
    }

  return (
    <div className='row'>
        <div className="col-md-5 mx-auto">
            <h3>Add Event</h3>
            <p>{message}</p>
            <form method="post" onSubmit={handleSubmit}>
                <div className="mb-1">
                    <label>Title</label>
                    <input ref={titleRef} type="text" className='form-control' required />
                </div>
                <div className="mb-1">
                    <label>Description</label>
                    <textarea ref={descriptionRef} rows={5} className='form-control' required ></textarea>
                </div>
                <div className="mb-1">
                    <label>Start Date</label>
                    <input ref={startDateRef} type="date" className='form-control' required />
                </div>
                <div className="mb-1">
                    <label>End Date</label>
                    <input ref={endDateRef} type="date" className='form-control' required />
                </div>
                <div className="mb-1">
                    <label>Location</label>
                    <input ref={locationRef} type="text" className='form-control' required />
                </div>
                <div className="mb-1">
                    <label>Status</label>
                    <select ref={statusRef} className='form-control' required >
                        <option value="active">active</option>
                        <option value="completed">completed</option>
                        <option value="canceled">canceled</option>
                    </select>
                </div>
                <div className="mb-1">
                    <label>Event Banner</label>
                    <input ref={imageRef} type="file" className='form-control' required />
                </div>
                <div className="mt-2">
                    <input type="submit" className='form-control btn btn-primary' value="ADD" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddEvent
