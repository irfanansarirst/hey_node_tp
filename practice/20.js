import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("message",(data)=>{
    console.log(`Received : ${data}`)
})
emitter.emit('message',"hello g")
emitter.emit("message","how are yoy")