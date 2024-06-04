// Imagine you're ordering a pizza. When you place the order, you don't immediately get the pizza. Instead, the pizza place tells you, "We're working on your order, and we'll have it ready soon." This is like a promise in JavaScript.
// A promise is basically a way for a piece of code to say, "I'm going to do something, and I'll let you know when it's done." In JavaScript, promises are used to handle asynchronous operations, like making a request to a server or waiting
// for a file to load 
// Techincal : accessing a file we need to access the kernel first its take time
// for which we use async wait aand promise(modern)

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// most of the time we consume promises rather creating them


//Code with Harry
// resolve and reject are two callbacks provided by Javascript itself.
// resolve(value) -> If the job is finished successfully
// reject(error) -> If the job fails


const promiseone = new Promise(function(resolve,reject){
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async Task is complete')
        resolve()//connect .then to the promise constructor
    },1000)
})
//connection with resolve
promiseone.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sitanshu",email:"Sitanshu@gmail.com"})
    },2000)
})

promisethree.then(function(user){
    console.log(user)
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error) resolve({username:"Sitanshu",password:"123"})
        else reject("Error: Something went wrong")
    },1000)
})
const username = promisefour.then((user)=>{
     console.log(user);
     return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("Finally the promise is either resolve r rejected")
})

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error) resolve({username:"Javascript",password:"123"})
        else reject("Error: JS went wrong")
    },1000)
})

// promisefive.then
async function consumepromisefive(){
    try{
        const response = await promisefive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumepromisefive()

// async function getallusers(){
//     try{
//         const response = await fetch('')
//         const data = await response.json()
//         console.log(data)
//     }catch{
//         console.log("E: ",error);
//     }
// }

// getallusers()

fetch('')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))