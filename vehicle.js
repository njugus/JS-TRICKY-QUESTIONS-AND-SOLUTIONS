//classes in js supporting the four concepts
class Vehicle{
    constructor(make, model){
        this.make = make
        this.model = model
    }

    //abstarct method
    startEngine(){
        console.log(`${this.make} ${this.model} : Engine has started`);  
    }

    //private method
    //encapsulation
    //specific service to do to a vehicle
    #service(){
        console.log(`${this.make} ${this.model} : vehicle serviced`); 
    }

    //an interface to interact with the service
    //abstarction
    performService(){
        this.#service()
        console.log(`${this.make} ${this.model} : Service Complete`); 
    }

}

class Car extends Vehicle{
    super(make, model, noOfDoors){
        this.noOfDoors = noOfDoors
    }

    //polymorphisma
    startEngine(){
        console.log(`${this.make} ${this.model} has  and started with a roar `);
    }

}

class Motorcycle extends Vehicle{
    super(make, model, noOfWheels){
        this.noOfWheels = noOfWheels
    }

    //polymorphism
    startEngine(){
        console.log(`${this.make} ${this.model} has started with a rrrrr`);
        
    }
}

const car = new Car("Toyota", "Curry", 4)
const bike = new Motorcycle("Tiger", "Captain", 2)

car.startEngine()
car.performService()

bike.startEngine()
bike.performService()

