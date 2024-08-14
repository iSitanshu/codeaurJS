const arr1 = [1,3,5]
const arr2 = [2,4]
const arr3 = [6,7,8]
const allhero = arr1.concat(arr2)

// console.log(arr1)
// console.log(allhero)

const allnewhero = [...arr1,...arr2,...arr3] //spread
// console.log(allnewhero)

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const myrealanotherarray = anotherarray.flat(Infinity)
// console.log(myrealanotherarray)

// console.log(Array.isArray("SItanshu"))
// console.log(Array.isArray(allhero))
// console.log(Array.from("SItanshu"))

const objj = {id:1,name:"Sitanshu",sir:"mishra"}
console.log(Array.from(Object.values(objj))) ///as object is not iterable so we use Object.values
console.log(Array.of(objj)) //different approach

