//singleton 
// Object.create 

// object literals
const mysym = Symbol("line1")
const JsUser = {
    name:"Sitanshu",
    id:1,
    [mysym]: "line1",
    year: 4,
    isloggedin: true,
    days: ['Monday','Tuesday']
}

// console.log(JsUser['name'])
// console.log(JsUser.name)
JsUser["isloggedin"] = false
// console.log(typeof JsUser.mysym)

// Object.freeze(JsUser)
JsUser["isloggedin"] = true
// console.log(JsUser)

JsUser.greeting = () => {
    console.log("hellow js user")
}
JsUser.greeting2 = () => {
    console.log(`hellow js user, ${JsUser.name}`)
}

console.log(JsUser.greeting()) //.greeting and .greeting()
console.log(JsUser.greeting2()) //.greeting and .greeting()