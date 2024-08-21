//Abstraction concept

class ATM {
    withdraw(){
       console.log("Withdrwaing the money....");
       this.#validatePin()
       this.#checkingBalance()
       this.#withdrwaingCash()
       console.log("WithdrwaL Successfull!");
    }
    #validatePin(){
        console.log("Validating the pin..");
    }
    #checkingBalance(){
        console.log("Checking the pin....");   
    }
    #withdrwaingCash(){
        console.log("withdrawing the cash...");
    }

}

const atm = new ATM()
atm.withdraw()