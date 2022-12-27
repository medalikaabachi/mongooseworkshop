const express=require("express")
const router=express.Router()

const Contact=require("../models/Contact")
//add cONTACT

router.post("/add",async(req,res)=>{
    const{name,email,phone}=req.body

    const newContact=new Contact({name,email,phone})

     const contact=await newContact.save()

     res.send({msg:"contact added",contact})

})
module.exports=router