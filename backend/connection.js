const mysql = require("mysql2");
const connect = mysql.createConnection({
    user: "root",
    password: "P@th@2415finder",
    host: "localhost",
    database: "ecommerce"
})

connect.connect((err)=>{
    if(err) throw err;
    console.log("Connected with Database");
})
module.exports = connect;