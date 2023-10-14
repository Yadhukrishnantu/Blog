const express = require("express");

const server=express();


const  userRouter  = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");
require("./config/db");


const cors = require('cors');

server.use(cors({origin:'http://localhost:3000'}))



server.use(cors());

// app.set("view engine","ejs");
server.use(express.json());

server.use("/api/users",userRouter);
server.use("/api/blogs",blogRouter);

server.use("/api",(req,res,next) =>{
    res.send("hello")
})

//define port

server.listen(5000, () => console.log("app started at 8000..."));