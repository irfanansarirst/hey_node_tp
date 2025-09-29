import fs from 'fs';
const readStream = fs.createReadStream('./1.txt','utf8');
readStream.on('data',(chunk)=>{
    console.log("chuncks ", chunk)
})
readStream.on('end',()=>{
    console.log('wowow')
});

const writeStream = fs.createWriteStream('./1.txt')
writeStream.write("hw")
writeStream.end("done writing")