const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogsapp").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})