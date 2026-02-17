import mongoose from "mongoose";

import dns from 'dns';
dns.setServers(['8.8.8.8'])

let DB_URL="mongodb+srv://surajit:surajit@cluster0.pahbl.mongodb.net/cen_event"

async function connectToDB(){
    try {
        await mongoose.connect(DB_URL)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("Database Error")
        console.log(error)
    }
}

export default connectToDB