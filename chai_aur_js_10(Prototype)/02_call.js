function setusername(username){
    //complex calculation
    this.username = username
    console.log("called");
}
function createuser(username, email, password){
    setusername.call(this,username)
    // this.username = username
    this.password = password
    this.email = email
}

const chai = new createuser("chai","chai@.com","123")
console.log(chai)