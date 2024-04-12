//Old style of import modules : this is commonJS
// const express = require("express")

import express from "express" // This is new style like react  : This is module aproach
import dotenv from "dotenv"
import connectDB from "./config/database.js";
dotenv.config({})

const app = express()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`server responding with port number ${PORT}`)
})