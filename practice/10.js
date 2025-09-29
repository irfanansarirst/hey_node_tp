import http from 'http';
import { hostname } from 'os';
import path from 'path';
http.get('http://jsonplaceholder.typicode.com/posts/1',(res)=>{
    let data = '';
    res.on('data',chunk=>{
        data+=chunk;
    });
    res.on('end',()=>{
        console.log("response",JSON.parse(data));
    });
}).on('error',(err)=>{
    console.log('Error',err.message)
})
const data1 = JSON.stringify({
    'title':"foo",
    body:"bar",
    userId:1
});
const options = {
    hostname:'jsonplaceholder.typicode.com',
    path:'/posts',
    method:"POST",
    Headers:{
        "Content-Type":"application/json",
        'Content-Length':data1.length
    }
}
const req = http.request(options,(res)=>{
    let body = '';
    res.on('data',chunk=>{
        body+=chunk
    })
    res.on('end',()=>{
        console.log("response",body)
    })
    res.on('error',(err)=>{
    console.log(err.message)
})
req.write(data1)
req.end()
})
