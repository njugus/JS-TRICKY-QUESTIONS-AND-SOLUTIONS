//function takes in a string
function checkPalindrome(myString){
    //remove any trailing whitespaces in the string
    //trim()
    const trimmedString = myString.trim();
    //lets remove any capitalization from the string
    //toLowerCase()
    const lowerCaseString = trimmedString.toLowerCase();
    //now lets check whether the string is a palindrome or not
    counter = lowerCaseString.length
    for(let element in lowerCaseString){
        if(lowerCaseString[element] == lowerCaseString[counter - 1]){
            counter--;
        }
    }
    if(counter == 0) {
        console.log("String is a palindrome");
    }
    else{
        console.log("The String is not a palindrome");
    }
}

checkPalindrome("madam")