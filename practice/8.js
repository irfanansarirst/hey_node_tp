// import http from 'http';
// const server = http.createServer((req,res)=>{
//     if(req.method==='POST'){
//         let body = "";
//         req.on('data',chunk=>{
//             body+=chunk.toString()
//         })
//         req.on("end",()=>{
//             console.log("Body : ",body)
//             res.end("Data recieved",+body)
//         })
//     }else{
//         res.end("send a post request with some data")
//     }
// });
// server.listen(3000,()=>console.log("sercer is working"))
import http from 'http';

const app = http.createServer((req,res)=>{
    if(req.method==='GET' && req.url.startsWith('/user')){
        res.writeHead(200,{
            'Content-Type':"application/json"
        })
        res.end(JSON.stringify({msg:"fetching user data"}))
    }
})
app.listen(3000,()=>console.log("haha..."))