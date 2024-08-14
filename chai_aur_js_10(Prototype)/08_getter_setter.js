class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    //getter and setter on variables
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Sitanshu`
    }
    set password(value){
        this._password=value
    } //maximum call stack size exceeded - setter and constructor both setting the values
}

const hitesh = new user("Sitanshu.ai","abc")
console.log(hitesh.password);
console.log(hitesh.email);