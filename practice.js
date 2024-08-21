//a guidance and counselling system that has 3 types of users , Admin, RegularUser and Counsellors

//parent class
class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    getDetails() {
        console.log(`Name: ${this.name}  Email : ${this.email}`);  
    }
}

//child class
class RegularUser extends User {
    #role
    constructor(name, email, role){
        super(name, email)
        this.#role = role
    }
    getRole () {
        console.log(`Role : ${this.#role}`);
    }
}

class Admin extends User{
    #role
    constructor(name , email, role){
        super(name, email)
        this.#role = role
    }
    getRole() {
        console.log(`role : ${this.#role}`);
    }
}

class Counsellor extends User{

    constructor(name, email, role){
        super(name, email)
        this.role = role
    }
    sendRoleApprovalRequest(){
       console.log(`am ${this.name} requesting for approvals as ${this.role}`);   
    }

    getRole () {
        console.log(`Role : ${this.role}`);
    }
}

const regUser = new RegularUser("john", "john@gmail.com", "user")
const counsellor = new Counsellor("George", "george@gmail.com", "counsellor")

// regUser.getDetails()
counsellor.getDetails()
// regUser.getRole()
counsellor.getRole()

// algorithm for user role approval
// a function to send a role approval request to admin(in counsellor)
// a function to get the request on admin side
// a function to approve the counsellor(setters and getters)

