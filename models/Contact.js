const mongoose=require("mongoose")
const { Schema } = mongoose;

const ContactSchema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:Number
    },
    dateCreation:{
        type:Date,
        default:Date.now()
    }
})

module.exports=Contact=mongoose.model=("contacts",ContactSchema)
