const express=require('express')
const app=express()
const dotenv=require('dotenv')
// const router1 = require('./routerpage/register')
const cors=require("cors")
// const auth=require("./middleware/authenticationpage")
const bodyParser=require('body-parser')
app.use(cors({
    origin:"*"
}))
dotenv.config()
app.use(bodyParser.json())
app.use(express())
const port=process.env.PORT
// const jwt=require("jsonwebtoken")
// const { qry1 } = require('./userControl/userrouting')
const rout1 = require('./mainrout')
// const qry1 = require('./userControl/userrouting')
// const { query1 } = require('./userControl/userrouting')
// const auth = require('./middleware/authenticationpage')
app.get("/",(req,res)=>{
    res.send("home page /qry1/qry2/qry3/qry4....")
})
app.use(rout1)

// app.get("/qry1",(req,res)=>{
//     res.send(qry1)
// })
// app.get("/first",(req,res)=>{
//     res.send(query1())
// })

app.listen(port,()=>{
    try{
        console.log("currently running with",`${port}`)
    }
    catch(error){
        console.log(error)
    }
})