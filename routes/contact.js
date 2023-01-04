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

//affichage
router.get("/",async(req,res)=>{
    const contacts=await Contact.find()
    res.send({msg:"data fetched",contacts})
    
    
    })
    
    //delete user
    
    router.delete("/delete/:id",async(req,res)=>{
        const {id}=req.params
        const contact=await Contact.findOneAndDelete({_id:id})
        res.send({msg:"user deleted",contact})
    })
    //edit
    router.put("/edit/:id",async(req,res)=>{
        const{id}=req.params
        const contact=await Contact.findOneAndUpdate({_id:id},{$set:req.body})
        res.send({msg:"contact modified"})
    })
    
module.exports=router