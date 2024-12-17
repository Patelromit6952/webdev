const express  = require('express')
const dotenv = require('dotenv')
const productrouter = require('./routes/route')
const app = express()
app.use(express.json())
dotenv.config();
const port =  process.env.PORT
const connectdb = require('./config/db');
connectdb();
app.use('/api',productrouter)

app.get('/',(req,res) => {
    res.send('hello world')
})
app.listen(port,() => {
    console.log('hi romit patel');
})