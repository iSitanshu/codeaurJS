//Array
// const myarr = [0,1,2,3,4,5,true,"Sitanshu",{
//     id: Date.now(),
//     name: "Sitanshu",
//     location: "Ghandhi Park"
// },[]] //elements can be of any type - object and array as well
// console.log(myarr[6]);
// console.log(myarr[7]);
// console.log(myarr[8]['name']
// );
// console.log(myarr[9]);

// console.log(myarr)

const actor = ["srk",'kartik','ranbir']
// const actor2 = new Array(1,2,3,4)
// console.log(actor)

// console.log(actor2)
// actor.push("Sallu")
// console.log(actor)
actor.push({
    id: 1,
    name: "salaman",
    sirname: "khan"
})

// console.log(actor)
// actor.unshift("Amitabh")
// actor.shift()
// console.log(actor)


//slice , splice
const myn1 = actor.slice(1,3)
console.log(actor)
console.log(myn1)
const myn2 = actor.splice(1,3)
console.log(myn2)