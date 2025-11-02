const express = require("express");
const app = express();
app.use(express.json())
const blogs = [];
app.post("/blogs",(req,res)=>{
    blogs.push({...req.body, id:blogs.length+1})
    return res.json({"message":"Blog Created Successfully"})
})
app.get("/blogs",(req,res)=>{
    let publicBlogs = blogs.filter(blog=>!blogs.draft)    
    return res.json({publicBlogs})
})
app.get("/blogs/:id",(req,res)=>{
    const{id}=req.params;
    let searchBlog = blogs.filter(blog=>blog.id==id)    
    return res.json({searchBlog})
})
app.patch("/blogs/:id",(req,res)=>{
     const{id}=req.params;
    let index = blogs.findIndex(blog=>blog.id==id)   
    blogs[index] = {...blogs[index], ...req.body} 
    return res.json({message:"Blog Updated Successfully"})
})
app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const index = blogs.findIndex(blog => blog.id == id);
  blogs.splice(index, 1);
  return res.json({ message: "Blog Deleted Successfully" });
});


app.listen(3000,()=>{
    console.log("server started")
})