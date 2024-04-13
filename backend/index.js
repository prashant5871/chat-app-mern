//Old style of import modules : this is commonJS
// const express = require("express")

import express from "express" // This is new style like react  : This is module aproach
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import userRouter from "./routes/userRoute.js"
import cookieParser from 'cookie-parser'
dotenv.config({})

const app = express()

const PORT = process.env.PORT || 3000;

//Middleware

app.use(express.json())
app.use(cookieParser())

//User routes
app.use("/api/users",userRouter)

app.listen(PORT, () => {
    connectDB();
    console.log(`server responding with port number ${PORT}`)
})