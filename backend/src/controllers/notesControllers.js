import Note from "../models/Note.js"

export const getAllNotes = async (req,res) => {
    try{
        const notes = await Note.find().sort({createdAt: -1}); //newest first , sort in des order
        res.status(200).json(notes)

    }catch(e){
        console.error("error in notes controller");
        res.status(500).json({message: "Internal server error" })
    }

}

export const getNoteById = async (req,res) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message : "note not found"})

        res.status(200).json(note)

    }catch(e){
        console.error("error in notes controller");
        res.status(500).json({message: "Internal server error" })
    }

}



export const createNote = async (req,res) => {
    
    try{

        const {title,content} = req.body
        const newNote = new Note({title,content});
        const savedNote = await newNote.save()

        res.status(201).json({savedNote})
       
    }catch(e){
        res.status(500).json({message : "internal server error"})

    }
}

export const editNote = async (req,res) => {
    try{
        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content}, {new: true});
        if(!updatedNote) return res.status(404).json({message : "note not found"})
        res.status(201).json({updatedNote})

    }catch(error){
        res.status(500).json({message : "internal server error"})
    }
}

export const deleteNote = async (req,res) => {

    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deleteNote) return res.status(404).json({message : "note not found"})
        res.status(201).json({message : "deleted"})


    }catch(error){
        res.status(500).json({message : "internal server error"})

    }
}