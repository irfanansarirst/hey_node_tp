console.log('start')

setTimeout(()=>{
    console.log("Timer out")
},0);

Promise.resolve().then(()=>{
    console.log("Promise callback")
})
console.log("end")

const sum = (a,b) => a+b;
console.log(sum(20,30))

console.log(`This is from sum function ${sum(120,130)}`)

const user = {name:"john doe", age:20}
const{name,age} = user;
console.log(name)
console.log(age)

const arr = [1,2,3]
const [a,b,c] = arr
console.log(a,b,c)

function greet(name="Irfan ansari"){
    return `good morning ${name}`
}
console.log(greet("sana maqbool"))

function sums(...nums){
    return nums.reduce((a,b)=>a+b,0)
}
console.log(sums(1,2,3))

const arr1 = [1,2,3,4,5]
const arr2 = [...arr1,6,7]
console.log(arr2)

const person = {
    name,
    age,
    greet(){
        console.log(`this is ${this.name} and my age is ${this.age}`)
    }
}
person.name="deepika padukone"
person.age=20
console.log(person.greet())

import { hum } from "./test.js";
console.log(hum(90,10))


class People{
    constructor(name){
        this.name=name
    }
    greet(){
        console.log(`Hello, Im ${this.name}`)
    }
}
const p = new People("Alice")
p.greet()

for(let ele of [1,2,3]){
    console.log(ele)
}

const obj1 = {profile:{email:"irfan@email.com"}};
console.log(obj1.profile?.email)
console.log(obj1?.address)

const var1 = 80
console.log(var1 ?? 90)

function fetchDatas(callback){
    setTimeout(() => {
        callback("data recieved")
    }, 0);
}
fetchDatas((data)=>{console.log(data)}) //i actually call the function here
//or we can say that passes one argument as parameter.

// getUser(1,(user)=>{
//     getOrders(user.id,(orders)=>{
//         getOrderDetails(orders[0],(details)=>{
//             console.log(details)
//         })
//     })
// })

const fetchDatass = new Promise((resolve,reject)=>{
    setTimeout(() => {
        return resolve("data recieved")
    }, timeout);
})
fetchDatass.then(data=>console.log("hmm")).catch(err=>console.log("ohno"))

import fs from 'fs'

fs.readFile("1.txt","utf-8",(err,data)=>{
    if(err){
        console.error(err.message);
        return;
    }
    console.log("THis is the file data : ",data)
})

function outer(){
    let counter = 0;
    return function inner(){
        counter++;
        return counter
    }
}
const increment = outer();
console.log("this is inc +1",increment())
console.log("this is inc +1",increment())
