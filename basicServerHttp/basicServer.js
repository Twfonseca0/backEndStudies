const http = require("http")

const server = http.createServer((req, resp)=>{
    resp.writeHead(200, {"Content-Type":"text/html"})
    resp.write("<h1> Hello from a server HTTP </h1>")
    resp.end()
})

server.listen(3000,()=>{
    console.log("Server Running")
})