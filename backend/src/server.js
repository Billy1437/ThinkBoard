import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDb } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

import path from "path"
import dotenv from "dotenv";
dotenv.config()

const app = express();

const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();


// middleware


if(process.env.NODE_ENV !== "production"){
    app.use(cors({
    origin : "http://localhost:5173"
    })
)
}

app.use(express.json());

app.use(rateLimiter);





// custom middleware
// app.use((req,res,next) => {
//     console.log(`req method is ${req.method} and  ${req.url}`)
//     next()
// })



app.use("/api/notes",notesRoutes)



if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*any}",(req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist",index.html))
    })

   

}


// once db conncet , start server
connectDb().then(() => {

    app.listen(PORT, () => {
    console.log("server started on port ,",PORT)
    } )

})







