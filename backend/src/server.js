import cors from 'cors';
import express from 'express';
import {connectToDB,db} from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("server is running")
})
connectToDB(()=>{
    app.listen(6000,()=>{
        console.log("Server is running at 6000");
    })
})