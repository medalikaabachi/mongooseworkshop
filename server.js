const express=require("express")


const app=express()
const connectDB=require("./config/connectDB")
app.use(express.json())
connectDB()
app.use("/contacts",require("./routes/contact"))
const port=5000
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})