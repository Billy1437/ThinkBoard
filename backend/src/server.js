import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

import { connectDb } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

const app = express();

const PORT = process.env.PORT || 5001;


// middleware
app.use(express.json());

// before rate limiter
app.use(cors({
    origin : "http://localhost:5173"
}))

app.use(rateLimiter);





// custom middleware
// app.use((req,res,next) => {
//     console.log(`req method is ${req.method} and  ${req.url}`)
//     next()
// })

app.use("/api/notes",notesRoutes)



// once db conncet , start server
connectDb().then(() => {

    app.listen(PORT, () => {
    console.log("server started on port ,",PORT)
    } )

})







