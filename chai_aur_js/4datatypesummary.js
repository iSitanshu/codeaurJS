// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time

// primitive datatype
// String Number Boolean Null Undefined Symbol bigint

const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsidetemp = null
let userEmail1;
let userEmail2 = undefined; //same

const id = Symbol('123')
const anotherid = Symbol('123')
// const id2 = '123'
// const id3 = '123'
// console.log(id2===id3)
console.log(id===anotherid)
// console.log(id===id2)
// console.log(anotherid===id2)

// const bignumber = 3245453464566n


// Reference datatype
// Array Object Function 

// const heros = ["Shaktiman","naagraj","doga"]
// let myobj = {
//     name:"Sitanshu",
//     age:20
// }

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof(bignumber))
console.log(typeof(outsidetemp))
console.log(typeof(myfunction))


// ......................................


//stack (Primitive) mai copy milta hai and heap (Non-Primitive) reference milta hay
let myyoutube = "Sitanshu"
let anothername = myyoutube
anothername = "Mishra"
console.log(myyoutube)
console.log(anothername)

let userone = {
    email:"user@gmail",
    upi:"user@ybl"
}
let usertwo = userone;
usertwo.email = "Sitanshu@gmail.com"
usertwo.upi = "Sitatwou@ybl"


console.log(userone.email);
console.log(usertwo.email);
console.log(userone.upi);
console.log(userone.upi);