const express = require('express');
const app = express()
const port = 3000
const connectDB = require('./db');
const Users1 = require('./routes/route')
connectDB();
app.use(express.json())
app.use('/romit',Users1)
// app.get('/',(req,res)=>{
//     console.log("i am inside home page route handler");
//     res.send("hello jee welcome")
// })

app.listen(port,()=>{
    console.log("hi rk")
})