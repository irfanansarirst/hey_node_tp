import http from 'http';

let users = [
    {id:1,name:"irfan"},
    {id:2,name:"sanjana"},
    {id:3,name:"astitwa"}
]
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");
    if(req.url==='/users' && req.method==='GET'){
        res.end(JSON.stringify(users))
    }
    else if(req.url==='/users' && req.method==='POST'){
        let body = "";
        req.on('end',()=>{
            const newUser = JSON.parse(body);
            newUser.id=users.length+1;
            users.push(newUser);
            res.writeHead(201)
            res,end(JSON.stringify(newUser))
        })
    }
    else if(req.url.startsWith('/user/') && req.method==='PUT'){
        const id = parseInt(req.url.split('/')[2])
        let body = '';
        req.on('data',chunk=>{
            body+=chunk;
        })
        req.on('end',()=>{
            const updateData = JSON.parse(body)
            users=users.map(user=>user.id===id?{
                ...user,...updateData
            }:user)
        })
        res.end(JSON.stringify({
            msg:"user updated"
        }))
    }
    else if(req.url.startsWith('/users/') && req.method==='DELETE'){
        const id = parseInt(req.url.split('/')[2]);
        users=users.filter(u=>u.id!==id)
        res.end(JSON.stringify({
            msg:"user deleted"
        }))
    }else{
        res.writeHead(404);
        res.end(JSON.stringify({
            error:"not found"
        }))
    }
});
server.listen(3000,()=>console.log("hello world"))