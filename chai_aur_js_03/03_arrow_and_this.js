const obj = {
    username : "Simp",
    price:999,
    welcomemessage : function(){
        console.log(`Welcome to our website ${this.username}`)
        console.log(this)
    }
}
// obj.welcomemessage()
// obj.username = "Sitanshu"
// obj.welcomemessage()

// console.log(this) //{} empty but in browser output window aata hai - global object

// function chai(){
//     let username = "Simp" 
//     // console.log(this)
//     console.log(this.username) //undefined - function k andar this nhi work krta only works for object 
// }
// chai()

// const chai = function(){
//     let username = "Sitanshu"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Sitanshu"
    console.log(this.username);
    console.log(this);
}
// chai()


// +++++++++++++++++++++++Arrow++++++++++++++++++

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// const addtwo = (num1,num2) => num1 + num2 //implicit return

// const addtwo = (num1,num2) => (num1 + num2) //implicit return

const addtwo = (num1,num2) => ({username:"simp"})
console.log(addtwo(5,5))

// const myarray = [2,3,5,5,4]
// myarray.forEach()