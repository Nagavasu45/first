const { qry1, qry2, qry3, qry4, qry5, qry6 } = require("./userControl/userrouting");

const rout1=require("express").Router();
rout1.get("/qry1",qry1)
rout1.get('/qry2',qry2)
rout1.get('/qry3',qry3)
rout1.get('/qry4',qry4)
rout1.get('/qry5',qry5)
rout1.get('/qry6',qry6)
module.exports=rout1