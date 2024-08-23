// model a smart home system using OOP

class User{
    constructor(name, email, residence){
        this.name = name
        this.email = email
        this.residence = residence
    }

    displayUserInformation(){
        console.log(`${this.name}`);
        console.log(`${this.email}`);
        console.log(`${this.residence}`);  
    }
}

class Device{
    #isTurnedOn
    constructor(){
        this.#isTurnedOn = false
        this.status = this.#isTurnedOn ? "active" : "inactive"
    }
    checkDeviceStatus(){
        return this.status
    }

    turnOnDevice(){
        if (this.checkDeviceStatus() === "inactive" ){
            this.status = "active"
            return this.#isTurnedOn = true
        }
        else{
            return this.#isTurnedOn
        }
    }
}

class Light extends Device{
    constructor(roomName){
        super()
        this.brightness = 0
        this.roomName = roomName
    }

    increaseBrightness(value){
        this.brightness += value
        return this.brightness
    }

    deacreaseBrightness(value){
        if (this.brightness < value){
            console.log(`the value is larger than the total brightness`);  
        }
        else{
            console.log(`${this.brightness} reduced to ${this.brightness - value}`);  
        }
    }

}

class Thermostat extends Device{
    constructor(){
        super()
        this.temparature = 0
        this.heating = false
        this.cooling = false
    }

    increaseTemparature(value){
        if(this.heating){
            return this.temparature += value
        }
    }

    deacreaseTemparature(value){
        if(this.cooling){
            if(this.temparature < value ){
                console.log("The value is greater than the temparature...input a lower value");    
            }
            else{
                console.log(`${this.temparature} has been reduced to ${this.temparature - value}`);
                
            }
        }
    }

    switchToHeatingMode(){
        return this.heating = true
    }

    switchToCoolingMode(){
        return this.cooling = true
    }

    turnAllModesOff(){
        this.heating = false
        this.cooling = false
    }

}

class Cameras extends Device{
    constructor(cameraLocation){
        super()
        this.cameraLocation = cameraLocation
    }
}

class SmartHomeSytem{
    #allDevices = []

    addDevices(device){
        this.#allDevices.push(device)
    }

    viewAllActiveDevices(){
        const activeDevices = this.#allDevices.filter(device => { return device.checkDeviceStatus == "active"})
        return activeDevices;
    }

    turnOnDevice(device){
        if(device.turnOnDevice()){
            console.log("Device Turned On Successfully!!"); 
        }
        else{
            console.log("Failed to turn on device"); 
        }
    }
    //toggle between nodes
    toggleBetweenModes(device, mode){
        switch(mode){
            case "heating":
                device.switchToHeatingMode()
                console.log("Switched to heating mode");
                break;

            case "cooling":
                device.switchToCoolingMode()
                console.log("Switched to cooling mode");
                break;

            default:
                console.log("Mode does not exist");
        }
    }

    updateTemparatures(device, value){
        //increase temparatures
        if(device.heating){
            const newTemparature = device.increaseTemparature(value)
            console.log(`Temparature increased to ${newTemparature} Degrees Celcius`)
        }
        if(device.cooling){
            const newTemparature = device.deacreaseTemparature(value)
            console.log(`Temparature deacreased to ${newTemparature}`); 
        }
    }

}

const user = new User("kelvin", "kevin@gmail.com", "Limuru")
const device1 = new Light("Living Room")
const device2 = new Thermostat()
const device3 = new Cameras("Backyard")
const smartSystem = new SmartHomeSytem()
smartSystem.turnOnDevice(device2)
smartSystem.toggleBetweenModes(device2, "heating")
smartSystem.updateTemparatures(device2, 10)
console.log(device2);



