import express from "express"
const app=express();
const PORT=3000
app.listen(PORT,(req,res)=>
{

 
    console.log(`Server listening on port ${PORT}`);
  
});
app.get("/",(req,res)=>
{
res.send({ message: "Welcome 🥇" });

})