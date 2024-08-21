class Hotel{
    #rooms = []

    addRooms(rooms){
        this.#rooms.push()
    }

    viewRooms(){
        this.#rooms.forEach(element => {
            console.log(element);
        });
    }
}

class Room extends Hotel{
    constructor(roomType, roomPrice, roomNumber){
        this.roomType = roomType
        this.roomPrice = roomPrice
        this.roomNumber = roomNumber
        this.isAvailable = false
        this.bookedDates = []
    }

}

const room1 = new Room("Single", 3000)
const room2 = new Room("Bedsitter", 5000)
const hotel = new Hotel()
room1.addRooms(room1)
room2.addRooms(room2)
hotel.viewRooms()
