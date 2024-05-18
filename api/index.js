import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('MongoDB connected');
}).catch((err)=>{
    console.log("Error " + err);
});

const app = express();

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000!');
})