const product =require('../models/product_model')
const getproducts = async (req,res) => {
    try {
        const allproducts = await product.find();
        if(!allproducts || allproducts.length===0){
            res.json({
                message:"There is no products.."
            })
        }
        res.status(200).json({
            success:true,
            products:allproducts
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
const addproduct = async (req,res) => {
    try {
        
        const {name,price,description,category} = req.body;
        const newproduct = new product({name,price,description,category});
        await newproduct.save();
        res.json({
            success:true,
            message:"product added successfully.."
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
const updateproduct = async (req,res) => {
    try {
        const {id} = req.params;
        const {name,price,description,category} = req.body;
        const updatedproduct = await product.findByIdAndUpdate(id,{name,price,description,category});
        res.status(200).json({
            success:true,
            message:"product updated successfully successfully.."
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
const deleteproduct = async (req,res) => {
    try {
        const {id} = req.params;
        const deletedproduct = await product.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"product deleted successfully ."
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
module.exports = {getproducts,addproduct,updateproduct,deleteproduct}