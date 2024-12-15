const express = require('express');
const router = express.Router();

const User = require('../models/usermodel');

router.get('/read',async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})

router.post('/write',async(req,res)=>{
    try{
        const {name,age,weight} = req.body;
        const newuser = new User({name,age,weight});
        await newuser.save();
        res.send(json({
            success:true,
            User:newuser
        }))
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})

router.put('/write/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const {name,age,weight} = req.body;
        const updateduser = await User.findByIdAndUpdate(id,{name,age,weight});
        if(!updateduser){
            res.json({
                message:"user not found"
            })
        }
        res.status(200).json({
            success:true,
            User:updateduser
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})

module.exports = router;