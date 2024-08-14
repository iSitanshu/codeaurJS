class user{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`Username: ${this.username}`);
    }
    static createID(){ //we have given to stop giving access to other
        return `123`
    }
}
const sitanshu = new user("Sitanshu")
console.log(sitanshu.createID())

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("IPhone","iphone@gmail.com")
// console.log(iphone);
iphone.logme()
console.log(iphone.createID());