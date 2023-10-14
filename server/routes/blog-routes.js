const express = require("express")
const blogRouter = express.Router();
const { getAllBlogs , addBlog ,
      getById , 
    deleteBlog , getByUserId} = require("../controllers/blog-controllers");

blogRouter.get("/",getAllBlogs);
blogRouter.post('/add', addBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get("/user/:id",getByUserId)
module.exports = blogRouter;