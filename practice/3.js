import fs from 'fs';
if(fs.existsSync("./1.txt")){
    console.log("This is example")
}else{
    console.log("File does not exist")
}
const data = fs.readFileSync("./1.txt","utf8")
console.log(`we read the data `,data)

//asynchronous way
fs.readFile('./1.txt','utf8',(err,data)=>{
    if(err) throw err
    for(let i = 0; i<= data.length-1; i++){
        console.log(data[i])
    }
    console.log(data)
})

// const datum1 = fs.readFileSync("./1.txt",'utf8');
// console.log("ddd",datum1)
//it will overwrite the text
fs.writeFile("./1.txt","im writing something",(err)=>{
    if(err) throw err
    console.log("ops done")
})
//it will append the text
fs.appendFile("./1.txt","\n this is the text appended",(err)=>{
    if (err) throw err
    console.log("done")
})

const readStream = fs.createReadStream("./1.txt",'utf8');
readStream.on("data",(chunk)=>{
    console.log("chunk : ",chunk)
})

// fs.mkdir("newDir",(err)=>{
//     if(err) throw err
//     console.log("directry created!")
// })
// fs.mkdirSync("ahe")
