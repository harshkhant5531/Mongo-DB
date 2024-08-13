const mongoose=require('mongoose');
const express=require('express');

const app=express();

//connection

mongoose.connect("mongodb+srv://HARSHKHANT:harsh%405531@harshcluster.1dbct.mongodb.net/").then(()=>{
    console.log("Connected to Mongo DB");
}).catch((err)=>{
    console.log(err);
})

app.listen(7690,()=>{
    console.log("Server Started at 7690");
})