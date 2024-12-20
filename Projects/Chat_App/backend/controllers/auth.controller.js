import { generateTokn } from "../lib/utils.js";
import User  from "../models/user.model.js"
import bcrypt from "bcryptjs"
import cloudinary from "../lib/cloudinary.js"

export const signup = async  (req,res) => {
    try {
        const {fullname,email,password} = req.body;
        if(!fullname || !password || !email){
            return res.status(400).json({message:"please enter all fields   "})
        }
        if(password.length < 6) {
            return res.status(400).json({
                message:"password must be at least 6 characters long"
            });
        }
        const user = await User.findOne({email})
        if(user) return res.status(400).json({message:"email already exists.."})

        const salt = await bcrypt.genSalt(10)
        const hashedpassword= await bcrypt.hash(password,salt);
        const newuser = new User({
            fullname,
            email,
            password:hashedpassword
        })
        if(newuser){
          generateTokn(newuser._id,res);
          await newuser.save();
          res.status(201).json({
            _id:newuser._id,
            fullname:newuser.fullname,
            email:newuser.email,
            profilepic:newuser.profilepic,
          })  
        }
        else{
            res.status(400).json({message:"invalid user data"});
        }
    } catch (error) {
        console.log("error in signup controller!"+error.message);
        res.status(500).json({message:"internal server error"})
        
    }
};

export const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"invalid credentials"
            });
        }
        const ispasswordCorrect = await bcrypt.compare(password,user.password);
        if(!ispasswordCorrect) {
            return res.status(400).json({
                message:"invalid credentials"
            });
        }
        
        generateTokn(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            profilepic:user.profilepic,
        })
    } catch (error) {
        console.log("error in login controller! "+error.message);
        res.status(500).json({message:"internal server error"})
    }
};

export const logout = (req,res) => {
try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({
        message:"Logged Out Successfully"
    })
} catch (error) {
    console.log("error in logout controller!"+error.message);
    res.status(500).json({message:"internal server error"})    
}
};

export const updateprofile = async (req,res) => {
 try {
    const {profilepic} = req.body;
    const userId = req.user._id;

    if(!profilepic){
        return res.status(400).json({
            message:"profile pic is required"
        })
    }
    const uploadresponse = await cloudinary.uploader.upload(profilepic)
    const updateduser = await User.findByIdAndUpdate(userId,{profilepic:uploadresponse.secure_url},{new:true})
    res.status(200).json({updateduser})
} catch (error) {
    console.log("error in update profile pic");
    res.status(500).json({
        message:"internal server error"
    })
 }   
}

export const checkauth = async (req,res) => {
    try{
        res.status(200).json(req.user)
    }
    catch(error){
        console.log("error in checkauth controller");
        res.status(500).json({
            message:"internal server error."
        })
    }
}