import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

import { connectDb } from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 5001;

connectDb();

// middleware
app.use(express.json());

app.use("/api/notes",notesRoutes)



app.listen(PORT, () => {
    console.log("server started on port ,",PORT)
} )

