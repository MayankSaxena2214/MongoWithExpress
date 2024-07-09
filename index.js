const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat");
var methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
//to understand the url data
app.use(express.urlencoded({extended:true}));
main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

app.get("/",async (req,res)=>{
  let chats=await Chat.find({});
  // console.log(chats);
  res.render("home.ejs",{chats})
})
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
})
app.post("/chats",async(req,res)=>{
  let {msg,createdby,delieverto}=req.body;
  let chat=new Chat({
    msg:msg,
    to:delieverto,
    from:createdby,
    createdAt:new Date()
  })
  chat.save()
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err));
  console.log(chat);
  res.redirect("/");
})
app.get("/chats/:id/edit",(req,res)=>{
  let {id}=req.params;
  res.render("edit.ejs",{id});
  
})
app.put("/chats/:id",async(req,res)=>{
  let{id}=req.params;
  let {msg}=req.body;
  
  let chat=await Chat.findByIdAndUpdate(id,{msg:msg},{new:true});
  console.log(chat);
  res.redirect("/");
})
app.delete("/chats/:id",async(req,res)=>{
  let {id}=req.params;
  let chat=await Chat.findByIdAndDelete(id);
  res.redirect("/");
})
app.listen("8080",()=>{
  console.log("App is listening on the port 8080");
})