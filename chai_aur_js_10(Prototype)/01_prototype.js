// Javascript is a prototypical behaviour - haar nhi maanti hai jaldi
// koi cheez nhi mil rahe too vo haar nhi maanti aur upar dekhti 
// hai jab tak usko null value na mil jae

// Array -> Object -> null
// String ->
// Function ->

function multiplyby5(num){
    return num*5
}

multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createuser(username,score){
    this.username=username
    this.score=score
    // return this
}

createuser.prototype.increment = function(){
    this.score++
}
createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createuser("chai",25)
const tea = new createuser("tea",250)

chai.printme()