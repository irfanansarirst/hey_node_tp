import http from 'http';
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");
    if(req.method==='GET' && req.url==='/api/data'){
        res.end(JSON.stringify({
            msg:"here is my data"
        }))
    }else if(req.method==='POST' && req.url==='/api/data'){
        res.end(JSON.stringify({
            msg:"data recieved"
        }))
    }else{
        res.statusCode=404
        res.end(JSON.stringify({error:"not found"}))
    }
})
server.listen(3000,()=>console.log("server is working"))