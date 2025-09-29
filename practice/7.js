import http from 'http';
const server = http.createServer((req,res)=>{
    console.log('url',req.url);
    console.log("method",req.method);
    console.log("headers",req.headers)
    res.end("check console")
})
server.listen(3000,()=>console.log("haha..."))