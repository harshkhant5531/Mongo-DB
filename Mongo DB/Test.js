const mongoose=require('mongoose');
const express=require('express');

const app=express();

//connection

mongoose.connect("Add Connection String").then(()=>{
    console.log("Connected to Mongo DB");
}).catch((err)=>{
    console.log(err);
})

app.listen(7690,()=>{
    console.log("Server Started at 7690");
})
