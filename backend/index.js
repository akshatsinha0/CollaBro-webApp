import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://neilhundia:Qnut12RM4uspQWMi@collabro.qqtgd.mongodb.net/').then(()=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.error(err);
})

const app = express();
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server is listening at port:${PORT}`);
})

