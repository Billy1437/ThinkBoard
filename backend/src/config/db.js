import mongoose from "mongoose";

import 'dotenv/config';


export const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')

    }catch(e){
        console.error("error connecting")

    }
}
