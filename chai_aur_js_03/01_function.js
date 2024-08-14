// Function - Memory management callstack
function saymyname(){
    console.log("Sitanshu")
}
// saymyname // reference 
// saymyname() // execution 
//functionname - reference 
//functionname() - calling/execution

// function addtwonumber(number1 ,number2){
//     console.log(number1+number2)
// }
// give parameter to the function without function will not call
// addtwonumber(5,"5") //donoo ko string samaj lega
// addtwonumber(5,"a")
// functionname(x,y,z)=> argument
// function functionname(a,b,c)=>parameter

function addtwonumber(number1 ,number2){
    let result = number1+number2
    // console.log(result)
    return result
    // console.log(number1+number2) - return k baad kush kaam nhi krega
}

// const result = addtwonumber(5,null)
// console.log("result ki value",result);

function loginusermessage(username = "Sitanshu"){  //giving default value
    if(!username){
        console.log("Tell user to enter their username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginusermessage())
// kush paas nhi karenge too underfined

//shoping cart - iten nhi pata hoenge kitte aaenge

function calculatecartprice(...num1){ //... rest operator
    return num1
}
// [200,400,500,2000]
// console.log(calculatecartprice(200,400,500,2000)) //array milega

const user = {
    username : "Sitanshu",
    price : 200
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)
handleobject({
    username:"Simp",
    price:200
})

const arr = [12,23,4,34]

function arrayasparameter(arr){
    console.log(arr[2])
}
arrayasparameter(arr) 