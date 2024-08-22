class Customer{
    #name
    #creditCardNumber
    #phoneNumber

    constructor(name, creditCardNumber, phoneNumber){
        this.#name = name
        this.#creditCardNumber = creditCardNumber
        this.#phoneNumber = phoneNumber
    }

    displayUserInformation(){
        console.log(`${this.#name} ${this.#creditCardNumber} ${this.#phoneNumber}`);
    }
}

class Room{
    constructor(type, pricePerNight, roomNumber){
        this.type = type
        this.pricePerNight = pricePerNight
        this.roomNumber = roomNumber
        this.isAvailable = true
        this.bookedDates = []
    }

    bookRoom(checkInDate, checkOutDate){
        this.bookedDates.push({ checkInDate, checkOutDate})
        this.isAvailable = false
    }

    viewRoomDetails (){
        console.log(`${this.type}`);
        console.log(`${this.pricePerNight}`);
        console.log(`${this.roomNumber}`);
        console.log(`${this.isAvailable ? "Available" : "Booked"}`);
        console.log(`${this.bookedDates}`);
    }

    checkRoomAvailability (){
        return this.isAvailable//check room availability based on dates
    }

}

class System{
    #rooms = []

    addRooms(room){
        this.#rooms.push(room)
    }

    viewRooms(){
        this.#rooms.forEach(element => {
            console.log(element);
        });
    }
    checkRoomAvailability(type){
        const availableRoom = this.#rooms.find( room => { return room.type == type && room.isAvailable == true})
        if(availableRoom){
            console.log(`${type} available`); 
        }else{
            console.log(`${type} not available`); 
        }

    }

    bookRoomForCustomer(customerDetails, roomType, checkinDate, checkOutDate){
        const availableRoom = this.#rooms.find( room => { return room.type == roomType && room.isAvailable == true})
        if(availableRoom){
            availableRoom.bookRoom(checkinDate, checkOutDate)
            // console.log(` Invoice : \n${customerDetails.displayUserInformation()}\n ${availableRoom.viewRoomDetails()}`);
            customerDetails.displayUserInformation()
            availableRoom.viewRoomDetails()
        }
        else{
            console.log(`sorry the room is currently booked...Try another Room`);
            
        }
    }

}


const room1 = new Room("single", 3000, 2)
const room2 = new Room("bedsitter", 5000, 4)
const system = new System()
const customer = new Customer("Kelvin njuguna", 345678, +254110080435)

system.addRooms(room1)
system.addRooms(room2)
system.checkRoomAvailability("bedsitter")
system.bookRoomForCustomer(customer, "bedsitter", "8-21-2024", "8-25-2024")




