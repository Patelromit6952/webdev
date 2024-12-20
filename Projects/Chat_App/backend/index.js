import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoute from "../backend/routes/auth.route.js"
import connectdb from "./lib/db.js"
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoute)
app.listen(PORT,()=>{
    console.log("server is running");
    connectdb()
})