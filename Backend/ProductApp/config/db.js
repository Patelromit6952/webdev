const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}