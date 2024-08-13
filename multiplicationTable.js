// multiplication table of a number
//ask the user for input
const input = 2;

//declare the necessary starting variables
const multiples = [];
const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//loop throught the multipliers and multiply each with input
for(let number of multipliers){
    let res;
    res = number * input;
    switch(findPerfectSquares(res)){
        case true:
            console.log(`${number} * ${input} = ${res}. ${res} is a Perfect Square`);
            break;
        case false:
            console.log(`${number} * ${input} = ${res}`);       
    }
}


//function to check whether a number is a perfect square or not
function  findPerfectSquares(value){
    let isPerfectSquare = false
        for(let element of multipliers){
            if(element * element === value){
                isPerfectSquare = true;
                break;
            }
           }
     return isPerfectSquare;

}



