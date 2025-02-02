const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const port = 8081;

const route = require("./route");
require("./connection")
const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(port,()=>{
    console.log("Server started");
})