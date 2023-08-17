import cors from 'cors';
import express from 'express';
import {connectToDB,db} from './db.js';
app.get('/',(req,res)=>{
    res.send("server is running")
})
connectToDB(()=>{
    app.listen(9000,()=>{
        console.log("Server is running");
    })
})