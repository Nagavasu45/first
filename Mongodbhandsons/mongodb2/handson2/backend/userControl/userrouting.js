const { dbName } = require("../config/db")

// const express=require("express").Router()
// const employeecollection=databaseName.collection("employee")
const empcolloection=dbName.collection("employee")
const qry1=async (req,res)=>{
    console.log(empcolloection)
    const result1=await empcolloection.find({}).toArray()
    res.send({msg:result1})
}
const qry2=async (req,res)=>{
    console.log(empcolloection)
    const result1=await empcolloection.find({"salary":{$gt:"30000"}}).toArray()
    res.send({msg:result1})
}
const qry3=async (req,res)=>{
    console.log(empcolloection)
    const result1=await empcolloection.find({"overallExp":{$gt:"2"}}).toArray();
    res.send({msg:result1})
}
const qry4=async (req,res)=>{
    console.log(empcolloection)
    const result1=await empcolloection.find({yearGrad: { $gt: '2015' },overallExp: { $gt: '1' }}).toArray();
    res.send({msg:result1})
}
const qry5=async (req,res)=>{
    console.log(empcolloection)
    const result1=await empcolloection.updateMany( { "salary": { $gt: "70000" } },{ $set: { "salary": "65000" } });
    res.send({msg:result1})
}
const qry6=async (req,res)=>{
    console.log(empcolloection)
    const result1=await empcolloection.deleteMany({"lastComapny":"Y"});
    res.send({msg:result1})
}
module.exports={qry1,qry2,qry3,qry4,qry5,qry6}