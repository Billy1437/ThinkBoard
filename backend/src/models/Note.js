import mongoose from "mongoose";

// 1.create schema\
// 2.model based on that schema

const noteSchema = new mongoose.Schema({
    title: {
        type : String,
        required: true 
    },
    content:{
        type:String,
        required: true
    },
}, {timestamps:true})

// we got schema now, 
// create model


const Note = mongoose.model("Note",noteSchema);

// once got the model, can use in controller now

export default Note
