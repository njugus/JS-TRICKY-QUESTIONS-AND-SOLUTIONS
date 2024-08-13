//lets create a function to print numbers from 1 to 100
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        findPrimeNumber(i) 
    }
    else if(i % 3 === 0){
        console.log("Fizz");   
        findPrimeNumber(i)
    }
    else if(i % 5 === 0){
        console.log("Buzz");
        findPrimeNumber(i)    
    }
    else{
        console.log(i);
        findPrimeNumber(i)     
    }
}

//create a function to check whether a number is prime or not
function findPrimeNumber(y) {
    if(y <= 1){
        console.log("Not Prime Number");   
    }
    else if(y === 2){
       console.log("Prime Number");    
    }
    else{
        let isPrime = true;
        for(let x = 2; x <=Math.sqrt(y); x++){
            if(y % x == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
           console.log("The Number is a prime number");   
        }
        else{
            console.log("The number is not a prime number");
            
        }
    }

}
