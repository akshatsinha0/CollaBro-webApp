import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.error(err);
})

const app = express();
app.use(express.json());
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server is listening at port:${PORT}`);
})

