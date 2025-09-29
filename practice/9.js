//using the header
//1. request header
import http from 'http';
import url from 'url';

const server = http.createServer((req,res)=>{
    console.log('request header : ',req.headers);
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.end('Headers logged in cnosole')
})
server.listen(3000,()=>console.log(`app is listening on the ${3000}`))
//2. response header
const server2 = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.setHeader('X-Custom-Header','looser')
    res.writeHead(200);
    res.end(JSON.stringify({
        name:"don"
    }))
})
server2.listen(3001,()=>console.log(`server 2 also running ${3001}`))

const server3 = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url,true);
    const pathName = parsedUrl.pathname;
    const query = parsedUrl.query;
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify({
        pathname,query
    }))

})
server3.listen(3002,()=>console.log(`server 3 also running ${3002}`))