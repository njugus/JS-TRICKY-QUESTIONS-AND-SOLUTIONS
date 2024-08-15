
const input = 245;

// Function to convert any multi-digit number to a single-digit number
const logicFunction = (z) => {
    let sum = 0;
    let result;

    // Convert the number to a string and split it into individual digits
    const digits = z.toString().split("");

    // Convert each substring to an integer and sum them up
    for (let digit of digits) {
        sum += parseInt(digit, 10);
    }

    // If the sum is a single-digit, print it; otherwise, continue the process
    if (sum >= 1 && sum <= 9) {
        result = sum
        return result;
    } else {
        return logicFunction(sum);
    }
    
};

// Start the process with the input value
//  logicFunction(input);
const s = logicFunction(input);
console.log(s);


export default logicFunction