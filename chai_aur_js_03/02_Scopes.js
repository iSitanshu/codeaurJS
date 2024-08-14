// //global scope
// // var c = 300
// let a = 300
// if(true){ //if k andar block scope 
//     let a = 10
//     const b = 20
//     // var c = 30
//     // c = 30
//     // console.log("inside if statement ", a);
// }

// // console.log(a)
// // console.log(b)
// // not in comments console.log(c)

// // console.log(a)


// function one(){
//     const username = "Sitanshu"
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website);
//     two()
// }
// // one()
// if(true){
//     const username = "sitanshu"
//     if(username == "sitanshu"){
//         const website = "Youtube"
//         console.log(username + website)
//     }
//     // console.log(website)
//     console.log(username)
// }


// // ++++++++++++++++++interesting++++++++++++++++++++

// console.log(addone(5))
// function addone(value){ //function
//     return value+1
// }
// addtwo(5) //error - hosting  
// const addtwo = function(num){ //expression - kind a function
//     return num+2; 
// }
// // addtwo(5)

// const value = function (){
//     const username = "Sitanshu"
//     console.log(this.username)
// }
const value = () => {
    const username = "Sitanshu"
    console.log(this)
}
value()