const { MongoClient } = require("mongodb");
const mongodburl="mongodb://127.0.0.1:27017";

const mongoserver=new MongoClient(mongodburl)
const connection=async()=>{
    try{
        
        await mongoserver.connect();
        console.log("connection done successfully")
    }
    catch(error){
        console.log(`Error occured in mongodb connection ${error}`)

    }
}
// // const databaseName=mongoserver.db("Ecommerce")
// // const databaseName=mongoserver.db("Human_Resource")
// const databaseName=mongoserver.db("Human_Resource");
const dbName=mongoserver.db("Human_Resource");
module.exports={connection,dbName}