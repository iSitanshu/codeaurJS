const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","flash","batman"]

// marvel_heros.push(dc_heros) //array ke andar array aarahe hain
//which states that array koi bhi data le leta hain chahe array bhi ho vo
// console.log(marvel_heros)
// console.log(marvel_heros[2])
// console.log(marvel_heros[3][1])


// marvel_heros.concat(dc_heros) //same in case of concatination
// console.log(marvel_heros)

// const allhero = marvel_heros.concat(dc_heros) //naya variable bana ke concate
// console.log(allhero)

// const allnewheros = [...marvel_heros,...dc_heros] //...array name
// console.log(allnewheros)

// const anther = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realanther = anther.flat(Infinity)
// console.log(realanther)

console.log(Array.isArray(marvel_heros)) //cheeck array hain
console.log(Array.isArray("Sitanshu")) //cheeck array hain
console.log(Array.from("Sitanshu")) //from wala koi bhi value array main convert kr dega object bhi
const newness = Array.from("Sitanshu")
console.log(Array.from({name: "Sitanshu"})) //interesting case 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

// array is from of 
// important concept to learn