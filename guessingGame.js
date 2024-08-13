//create a number guessing game 
const winningNumber = 4;
let counter = 1;
while(counter <= 5){
    const playerChoice = Math.floor(Math.random() * 10);
    if(playerChoice === winningNumber){
        console.log("You Win");
        console.log("Thanks For Participating");
        break;
    }
    else{
        console.log("You Loose");
        console.log(playerChoice);
        
    }
    counter++;
}
