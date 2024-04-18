//obejct - declare krne k 2 tareeke literal ki tara aur constructor ki tara
//singleton - agar constructor se banate hain
// singleton - literal se nhi banta hain
 
//object literals
// Object.create - constructor method singleton
const mysym = Symbol("key1")

const jsuser = {
    name : "Sitanshu",
    age : 20,
    "fullname":"Siitanshu Mishra",
    location : "Delhi",
    [mysym]: "mykey1",
    email:"user@gmail.com",
    isoggedin: false,
    lastlogindays: ["Monday","Frinday"]
} // make keys and value

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["fullname"])
// console.log(typeof jsuser[mysym])

jsuser.email = "Sitanshu@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "father@gmail.com"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("welcome js user");
}

jsuser.greeting2 = function(){
    console.log(`Welcome js user, ${this.name}`);
}
// console.log(jsuser.greeting) //[Function (anonymous)]
// console.log(jsuser.greeting()) 

console.log(jsuser.greeting())
console.log(jsuser.greeting2())