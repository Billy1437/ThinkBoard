import Note from "../models/Note.js"

export const getAllNotes = async (req,res) => {
    try{
        const notes = await Note.find();
        res.status(200).json(notes)

    }catch(e){
        console.error("error in notes controller");
        res.status(500).json({message: "Internal server error" })
    }

}


export const createNote = (req,res) => {
    res.status(200).send("created")
}

export const editNote = (req,res) => {
    res.status(200).send("edited")
}


export const deleteNote = (req,res) => {
    res.status(200).send("deleted")
}