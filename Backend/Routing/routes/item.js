const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("got a get request")
    // res.sendFile('../dummy.html',{root:__dirname})
})
router.post('/items',(req,res)=>{
    res.send("got a post resquest")
})
router.put('/items/:id',(req,res)=>{
    res.send("got a put request")
})
router.delete('/items/:id',(req,res)=>{
    res.send('got a delete request')
})

module.exports = router