const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const connectdb = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }

}

module.exports = connectdb;