import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO DB CONNECTED SUCCESSULLY !");
    } catch (error) {
        console.error("Error connecting to MONGO DB", error);
        process.exit(1) // exit with failure
    }
};