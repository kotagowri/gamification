import cors from 'cors';
import express from 'express';
import {connectToDB,db} from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.post('/game/:count',async (req, res) => {
    const details = await db.collection('MERN_Project').findOne({count
    })
 res.json(details);
});
connectToDB(()=>{
    app.listen(6000,()=>{
        console.log("Server is running at 6000");
    })
})