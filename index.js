const express = require("express")
const conncetDB = require("./config/db")
const userModel = require("./model/user_model")
const app = express()
require("dotenv").config()
conncetDB();
app.get("/",(req,res)=>{
    res.send("Hi from Server")
})
//Server
const port = process.env.PORT
app.listen(port,()=>{
    console.log("Server is running")
}
)