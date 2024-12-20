import mongoose from "mongoose";
import dotenv from "dotenv";
import { log } from "node:console";
dotenv.config();
const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
        
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;