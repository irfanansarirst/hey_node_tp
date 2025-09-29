import https from 'https';
https.get('https://jsonplaceholder.typicode.com/posts/1',(res)=>{
    let data = '';
    res.on('data',chunk=>{
        data+=chunk;
    })
    res.on('end',()=>{
        console.log("secure response",JSON.parse(data));
    });
}).on('error',(err)=>{
    console.log("Erro", err.message)
})