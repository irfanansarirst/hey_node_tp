import http from 'http';
console.log(http)

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'content-type':'text/plain'
//     });
//     res.write("<h1>this is header from the server</h1>");
//     res.end();
// })
// server.listen(3000,()=>{
//     console.log("This app is running");
// })
// routing
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url==='/'){
        res.write("<h1>welcome to home page</h1>")
    }else if(req.url==='/about'){
        res.write("<h1>welcome to the about page</h1>")
    }else{
        res.write("This is 404 page")
    }
    res.end()
})
server.listen(3000,()=>console.log("app running"))