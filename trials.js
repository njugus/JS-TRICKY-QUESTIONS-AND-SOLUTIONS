const myArray = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 10]
const value = 5;


function checkOccurencies(arr, val){
    //always return the results of a function
    const result =  arr.reduce((a, v) => { return v === val? a + 1 : a}, 0)
    return result;
}

const noOfOccurencies = checkOccurencies(myArray, value)
console.log(noOfOccurencies);


