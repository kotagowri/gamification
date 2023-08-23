import cors from 'cors';
import express from 'express';
import {connectToDB,db} from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.post('/update/:email/:temp',async (req,res)=>{
  
    const details = await db.collection("game").findOneAndUpdate({Email:req.params.email},{$set:{Gamepoints:req.params.temp}});
    res.json(details);
})
app.get('/show/:email',async(req,res)=>
{
    const details=await db.collection("game").findOne({Email:req.params.email})
    res.json(details);
})

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server is running at 6000");
    })
})