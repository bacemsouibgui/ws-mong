//importation express
const express = require("express");
//instance express
const app = express();
// connectDB
const connectDB=require("./config/connectDB")
//4- middleware
app.use(express.json());

//connect to DB
connectDB()
//routes
app.use("/api/contacts",require("./routes/contact"))

//1- create port
const port = 4000;
app.listen(port, (err) =>
  err ? console.log("erreur") : console.log(`server is running on port ${port}`)
);