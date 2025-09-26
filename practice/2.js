import { title } from "process";
import { json, text } from "stream/consumers";

function person(name){
    this.name=name;
}
person.prototype.greet = function(){
    console.log(`hello, i'm ${this.name}`)
}
const p1 = new person("john")
p1.greet()

class People{
    constructor(name,age,salary){
        this.name = name
        this.age = age
        this.salary = salary
    }
    display(){
        console.log(`My name is ${this.name}, age is ${this.age} and salary is ${this.salary}`)

    }
}
const p2 = new People("irfan",21,2000)
p2.display()

class Animal{
    speak(){
        console.log("some sounds....")
    }
}
class Dog extends Animal{
    speak(){
        console.log("woof")
    }
}
// const ani = new Animal()
// // const dog = new Dog()
// // dog.speak()
// ani.speak()
let sum = 0;
[1,2,3,4,5].forEach(num=>sum+=num)
console.log(sum)
//return a modified array based on the statements
const doubled = [1,2,3,4,5].map((item)=>item*2)
console.log(doubled)
//it also return complete new moodified array based on the condition
const evens = [1,2,3,4,5].filter((n)=>n%2==0)
console.log(evens)
//reduce function reduces a array into the single value
const s1 = [1,2,3,4,5].reduce((acc,n)=>
    console.log(acc,n),0)
console.log(s1)

const obj1 = {name:"irfan",age:22}
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

const arrOfObj = Object.entries(obj1)
console.log(arrOfObj)
let j = 1
let k = 1
for(let i = 0; i<arrOfObj.length; i++){
    console.log(`this is ${j}`,arrOfObj[i][k])
    j++;
}

const {name,age} = obj1;
console.log(name)
console.log(age)

const reg1 = /irfan/;
const reg2 = new RegExp("irfan");

console.log("regex",reg1.exec(text))

const emailRegEx = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
//this is the way of converting the json string into the js object
const jsonString = '{"name":"alice","age":25,"address":"xyz","arr":[1,2,3,4,5,6,7,8,9]}'
const userData = JSON.parse(jsonString)
console.log("json string to json")
console.log(userData)
//now this is the way of converting the js object into the json string 
const obj2 = {name:"don",title:"shanshahe-e-hind"}
const jsonData = JSON.stringify(obj2,null,1)
console.log(jsonData)

const org = {
    name:"md",
    skills:['node','js'],
}
const copy = JSON.parse(JSON.stringify(org))
console.log(copy)


import fs from "fs";
import { error } from "console";
// console.log(fs)
fs.readFile("1.txt","utf-8",(err,data)=>{
    console.log(data)
    console.log("file read done")
})
console.log("im running without waiting")

console.log("This is process id",process.pid)
console.log(process.version)
console.log(process.platform)
console.log(process.cwd())

import fs from 'fs/promises';
