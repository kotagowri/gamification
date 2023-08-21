import cors from 'cors';
import express from 'express';
import {connectToDB,db} from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.post('/game/:email/:gamepoints',async (req,res)=>{
  
    const details = await db.collection('game').findOneAndUpdate({Email:req.params.email},{$set:{Gamepoints:req.params.gamepoints}})
    res.json(details);
})
connectToDB(()=>{
    app.listen(6000,()=>{
        console.log("Server is running at 6000");
    })
})