import http from 'http';
const server2 = http.createServer((req,res)=>{
    const c = req.headers
    res.setHeader("Set-Cookie",'username=don;httponly');
    console.log(c)
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.end("cookies has been set")
})
server2.listen(3000,()=>{
    console.log("server is running")
})