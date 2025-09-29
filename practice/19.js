import EventEmitter from "events";

class myEmitter extends EventEmitter{}

const myEmitter = new myEmitter;

myEmitter.on('order',(item,quantit)=>{
    console.log(`order recieved : ${quantit} ${item} (s)`)
});
myEmitter.emit('order','pizza',2)