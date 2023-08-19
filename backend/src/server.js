import cors from 'cors';
import express from 'express';
import {connectToDB,db} from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.get('/find/:email',async(req,res)=>{
    const data=await db.collection('Gowri').findone({email:req.params.email})
    res.json(data);
})
app.post('/updateAdmin/:email/:point',async (req,res)=>{
  
    const details = await db.collection('Gowri').findOneAndUpdate({email:req.params.email},{$set:{Points:req.params.point}})
    res.json(details);
})
connectToDB(()=>{
    app.listen(6000,()=>{
        console.log("Server is running at 6000");
    })
})