//Dates

let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof(mydate))

let mycreateddate = new Date("01-14-2023") //Month zero se start hote hain js main
// console.log(mycreateddate.toDateString())

let mytimespamp = Date.now()
// console.log(mytimespamp)
// console.log(mycreateddate.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate)
console.log(newdate.getFullYear())

newdate.toLocaleString('default',{
    weekday:"long",
})