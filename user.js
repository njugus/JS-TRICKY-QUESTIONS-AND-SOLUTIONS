//Online shopping system
class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    //display user information
    //abstract method
    displayUserInformation() {
        console.log(`Name : ${this.name} Email : ${this.email}`); 
    }
}

class Customer extends User{
    #cart = [];
    constructor(name, email, customerId){
        super(name, email)
        this.customerId = customerId
    }
    displayUserInformation(){
        console.log(`Name : ${this.name} customerId : ${this.customerId}`);;
    }

    addItemsToCart(item){
        //encapsulation
        this.#cart.push(item)
        console.log(`${item} added to cart`);
    }

}

const customer = new Customer("Kelvin", "kevin@gmail.com", 3)
customer.displayUserInformation()
customer.addItemsToCart("Laptop")




