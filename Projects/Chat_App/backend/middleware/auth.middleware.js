import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookie.jwt;
        if(!token){
            return res.status(401).json({
                message:"Unauthorized - No Token Provided"
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({
                message:"Unauthorized - Invalid Token Provided"
            })
        }
        const user =await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(401).json({
                message:"user not found"
            })
        }
        req.user = user;
        next();
    }
     catch (error) {
        console.log("error in protectroute middleware " + error.message);
        res.status(500).json({
            message:"internal server error"
        })
    }
};

export const updateprofile = async (req,res,next) => {

};