require('dotenv').config();
const express= require('express');
const app=express();
const router=require("./router/auth")
const connectDb = require("./utils/db");
app.use(express.json())

app.use("/api/auth", router);

connectDb().then(() =>{
app.listen(process.env.port,()=>{
    console.log(`server is running at port: ${process.env.port}`);
});
})