const express = require("express");
const connection = require("./connection");

const route = express.Router();

route.post("/saveProduct",(req,res)=>{
    const {productname,description,price,imageurl,category}=req.body;
    if(!productname || !description || !price || !imageurl || !category)
    {
        res.status(422).json("Please provide the required field values");
    }
    try{
        connection.query("INSERT INTO ecommerce.products SET?",{productname,description,price,imageurl,category},(error, response)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            res.status(201).json(response.body);
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})

route.get("/getProducts",(req,res)=>{
    try{
        connection.query("SELECT * FROM ecommerce.products",(error,response)=>{
            if(error)
                {
                    res.status(422).json(error);
                }
                else
                {
                    res.status(200).json(response);
                }
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})
module.exports =route