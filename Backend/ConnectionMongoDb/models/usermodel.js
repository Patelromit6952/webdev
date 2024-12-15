const {Schema,model} = require('mongoose')

const Userschema = new Schema({
    name : {
        type:String,
        required : true,
        maxlength:50
    },
    age:{
        type:Number,
        required:true
    },
    weight :{
        type:Number
    } 
});

const Usermodel = model("User",Userschema);
module.exports = Usermodel;