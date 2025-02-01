const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const port = 8081;
require("./connection")
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log("Server started");
})