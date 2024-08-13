//Check whether the value is in an array...
//if so, then return its index otherwise return -1
//then count the number of occrencies of the value using the index
//methods to use:
//indexOf() - returns the index of the first occurence of an element in the array
//Array.prototype.reduce() - to count the number of occurencies of a value in the array or string
//it returns the final count


//function to find the index of a value
function findIndexOfElement(x,  y){
    for(let num of myArray){
        if(num == value){
            index = myArray.indexOf(5, 0);
        }
    }
    return index;
}

//function to count the number of occurencies in the array
function checkOccurencies(arr, val){
    //always return the results of a function
    const result =  arr.reduce((a, v) => { return v === val? a + 1 : a}, 0)
    return result;
}

const noOfOccurencies = checkOccurencies(myArray, value)
console.log(noOfOccurencies);

