// switch (key) {
//     case value:
//     break;
//     default:
//     break;
// }

// const month=3
const month = "Jan"
switch (month) {
    case "Jan1":
        console.log("Jan")
        break;
    case "Feb":
        console.log("Feb")
        break;
    case "Mar":
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;
    default:
        console.log("No month")
        break;
}

const useremail = ""
if(useremail)
    console.log("Got user email")
else
    console.log("Dont have email")

// falsy value
// false,0,-0,BingInt 0n,"",null,undefined,NaN
// Truthy value
// "0","false"," ",[],{},function(){}

const usermail = []
if(usermail.length === 0) console.log("Got user email");
else console.log("Dont get user email");

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty")
}

// false == 0 => true
// false == '' => true
// 0 == '' => true

//Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10 //safty test
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

//Terninary Operator
// condition? true : false

const iceprice = 100
iceprice >= 120 ? console.log("less than") : console.log("More than");;