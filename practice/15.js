// import fs from 'fs';
// import zlib from 'zlib';
// import { buffer } from "stream/consumers"

// fs.createReadStream('./1.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('in.txt.gz'))
const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.from([72, 101, 108, 108, 111])
console.log(buf2.toString())

const buf3 = Buffer.from("irfan","utf8")
console.log(buf3)

