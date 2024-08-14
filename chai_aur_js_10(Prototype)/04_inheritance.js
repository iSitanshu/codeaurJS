class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username) //automatically set value and allow access
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123")
chai.addcourse()
chai.logme()
const masalachai = new user("Masala")
masalachai.logme()

console.log(chai instanceof user);
console.log(chai instanceof Teacher); 