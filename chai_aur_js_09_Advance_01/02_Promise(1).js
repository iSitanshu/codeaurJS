const promiseone = new Promise(function(resolve,reject){
    //Do Asyn Task
    //DB calls, crypotgraphy, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log('Promise consumed');
}) //resolve ka connection hai .then k sath

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sitanshu",email:"Sitanshu@gmail.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Sitanshu",password:"gmail.com"})
        }else{
            reject('Something went wrong')
        }
    },1000)
})

// const username = promisefour.then(function(user){
//     console.log(user);
//     return user.username
// })

// console.log(username)

promisefour.then(function(user){
        console.log(user);
        return user.username
    }).then((value)=>{
        console.log(value);
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>console.log("The promise is either resolve or rejected"))


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"gmail.com"})
        }else{
            reject('Something Javascript wrong')
        }
    },1000)
})

async function consumepromisefive(){
    // const response = await promisefive
    // console.log(response);
    try{
        const response = await promisefive
        console.log(response);
    }catch(error){
        console.log(error)
    }
} 
//error nhi aaegi
//directly error ko handle nhi kr sakte

consumepromisefive()

// async function getallusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // const data = response.json()
//         // console.log(data)
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }
// }

// getallusers() 

fetch('https://api.github.com/users/iSitanshu')
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=> console.log(error))

