// import express
const express= require('express');
// instance express
const app= express()
const connectDB = require('./config/connectDB')
// middleware
app.use(express.json())

connectDB()
// server
const port= 5000;
app.listen(port, (err)=> {
    err?console.log('erreur') : console.log(`server is running on port ${port}`)
});
