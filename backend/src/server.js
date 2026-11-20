import express from "express";
import NotesRoutes from "./routes/NotesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", NotesRoutes);

app.listen(PORT, () => {
    console.log("Server is On.. Port : ", PORT);
});