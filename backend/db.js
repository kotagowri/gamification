import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://kotagowri2003:gowri9692@cluster0.yf7ryin.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("recipe");
    cb();
}

export {db,connectToDB};