import fs from 'fs';
// import { eventNames } from 'process';
// let fileArr = []
let arr = fs.readdir(".",(err,files)=>{
    if(err) throw err
    for (let index = 0; index < files.length; index++) {
        console.log(files[index])
    }
})
// fs.rm("newDir",{recursive:true},(err)=>{
//     if(err) throw err
//     console.log("success")
// })
// const readStream = fs.createReadStream("./1.txt");
// const writeStream = fs.createWriteStream('./output.txt')
// readStream.pipe(writeStream) 

const buf = Buffer.from("Hello nodejs")
console.log(buf)
console.log(buf.toString())
console.log(fs.watch())

// import path from 'path';
// console.log(path.basename("/practice/1,txt"))

try{
    const data = await fs.promises.readFile("./1.txt","utf8");
}catch(err){
    console.log("error", err.message)
}
