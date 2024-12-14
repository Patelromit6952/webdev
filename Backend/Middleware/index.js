const express =  require('express')
const app = express()
const port = 3000
const route = require('./routes/route')
app.use('/api',route)
app.use(express.json())

const loggingmiddleware = function(req,res,next){
    console.log("Logging kar raha hu");
    next(); 
}
app.use(loggingmiddleware)

const authmiddleware = function(req,res,next){
    console.log("Authentication kar raha hu");
    next();
}
app.use(authmiddleware)

const validationmiddleware = function(req,res,next){
    console.log("validation kar raha hu");
    next();
}
app.use(validationmiddleware)

app.get('/',(req,res)=>{
    console.log(req.body);
  } )

app.listen(port,()=>{
    console.log("rk patel");
})