import fs, { write } from "fs";
import { Readable } from "stream";
const readStream = fs.createReadStream("./1.txt","utf8");
readStream.on("data",(chunk)=>{
    console.log("Recieved chunk : ",chunk.length)
    console.log(chunk)
})
readStream.on("end",(chunk)=>{
    console.log("Reading finished")
})
readStream.on("error",(error)=>{
    console.log("While reading",error)
})

const writeStream = fs.createWriteStream("./abux.txt")
writeStream.on("finish",()=>{
    console.log("writing completed")
})
writeStream.on("error",(err)=>{
    console.error("error while writing : ",err)
})

class myReadable extends Readable{
    constructor(data,options){
        super(options);
        this.data=data
    }
    _read(){
        if(this.data.length===0){
            this.push(null)
        }else{
            this.push(this.data.shift())
        }
    }
}
const myStream = new myReadable(['i','am','gunda'])
myStream.pipe(process.stdout)