//Object literal
// const tinderUser = {}

//Singleton
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sitanshu"
tinderUser.isloggedin = false
// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "SItanshu",
            lastname: "Mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1:"a",2:'b'}
const obj2 = {3:"a",4:'d'}
const obj4 = {5:"e",6:'f'}
// console.log({obj1,obj2,obj4})
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4} //Spread operator
// console.log(obj3)

const users = [
    {
        id:1,
        email: "Sitanshu@gmail.com"
    },
    {
        id:1,
        email: "Sitanshu@gmail.com"
    },
    {
        id:1,
        email: "Sitanshu@gmail.com"
    },
    {
        id:1,
        email: "Sitanshu@gmail.com"
    },
]

// console.log(users[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedin')) //indetify whether property is not present
console.log(tinderUser.hasOwnProperty('isloggedout')) //identify whether property is present