import mongoose from "mongoose";

import dns from 'dns';
dns.setServers(['8.8.8.8'])

let DB_URL="USE_YOUR_OWN_URL"

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