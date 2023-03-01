const express =require("express")
const app= express()

app.get("/",(req , resp)=>{
    resp.send("<h1>Hellow from a basic server with Express</h1>")
})

app.listen(3000, ()=>{
    console.log("Server Running")
})