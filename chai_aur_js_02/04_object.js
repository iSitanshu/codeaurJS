//Object using constructor
// const tinderuser = new Object{}  - Using singleton
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "Sitanshu"
tinderuser.isloggedin = false
// console.log(tinderuser)

const regularuser = {
    email : "Sitanshu@gmail.com",
    fullname : {
        userfullname : "Sitanshu",
        lastname : "Mishra"
    }
}
// console.log(regularuser.fullname?.userfullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"c",6:"d"}
// const obj3 = {obj1,obj2}
// console.log(obj3)
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "Sitanshu@gmail"
    },
    {
        id: 1,
        email: "Sitanshu@gmail"
    },
    {
        id: 1,
        email: "Sitanshu@gmail"
    }
]
users[1].email

// console.log(tinderuser)
// console.log(Object.keys(tinderuser)); //running method on tinderuser saare key ko array main rakh diya
// console.log(Object.values(tinderuser)); //running method on tinderuser saare values ko array main rakh diya

// console.log(tinderuser.hasOwnProperty('isloggedin'));
// console.log(tinderuser.hasOwnProperty('islogged'));


// +++++++++++ Object destructuring and JSON Api +++++++++++++

const course = {
    coursename:"js in hindi",
    price: "999",
    courseinstructor: "Hitesh"
}
// course.courseinstructor
const {courseinstructor: instructor} = course
// console.log(courseinstructor)
console.log(instructor)

const navbar = {} => {

}
navbar{company = "Sitanshu"}