import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';

pipeline(
    fs.createReadStream("./1.txt"),
    zlib.createGzip(),
    fs.createWriteStream('./in.txt.gz'),
    (err)=>{
        if(err){
            console.error("pipeline failed : ",err)
        }else{
            console.log("done")
        }
    }
);