//Array

const arr = [1,2,3,4,5]
// const myheros = ["Shaktiman","naagraj"]

// const arr2 = new Array(1,2,3,4)
// console.log(arr.length)

//Array methods

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9) //time consuming and load on computer
// arr.shift() //first wala haat jaega

// console.log(arr.includes(9))
// console.log(arr.indexOf(9))
// console.log(arr.indexOf(3))

// const newarr = arr.join() //bind kr diya hai aur string mmain convert kr diya hai
// console.log(arr)
// console.log(typeof newarr)

//slice and splice(Difference btw them is that slice main array start se end-1 tk extract krta hain aur array reduce nhi hota hai
// but splice main array main element haat jata hain aur end tak hota hai)

console.log("A ",arr)
const arr1 = arr.slice(1,3)
console.log(arr1)
console.log("B ",arr)
const arr2 = arr.splice(1,3)
console.log(arr2)
console.log("C ",arr)
