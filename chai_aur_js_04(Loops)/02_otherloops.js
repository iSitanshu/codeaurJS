// for of 
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for(const num of arr){
    // console.log(num);
}

const greeting = "Hello World!"
for(const greet of greeting){
    // console.log(`For each char is ${greet}`);
}

// Maps - not iteratable
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('FR',"France")
// map.set('USA',"United states of america")

// console.log(map);

for (const [key,value] of map){
    // console.log(key, ':-',value);
}

const myobject = {
    js: 'JavaScript',
    cpp: 'c++',
    rb: 'Rubby',
    swift: "Swift by apple"
}

for (const key in myobject) {
    // console.log(myobject[key]);
}

for (const key in myobject){
    // console.log(`${key} shortcut is for ${myobject[key]}`)
}

// const programming = ["js","rb","py","java","cpp"]
// for (const key in programming)
    // console.log(programming[key])

const coding = ["js","rb","py","java","cpp"]
// coding.forEach( function (item) {
// })

// coding.forEach(function (val){
//     console.log(val);
// });

// coding.forEach((item)=>{
    // console.log(item);
// })

// function printme(item){
    // console.log(item);
// }

// coding.forEach(printme)

const mycoding = [
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "python"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languageName);
})