
//test, expect and toBe
//expect is an assertion or expectation.we expect the value of 1 + 2 to be 3;
//it should be directly used to check the result of findsum.
//to be is a method of expect not a method of the result of expect.
//use other matchers based on specific needs

import findSum from './add.js';      // Import your function

// Define your test
test('adds 1 + 2 to equal 3', () => {
    // Call the function and use expect to make assertions
    expect(findSum(1, 2)).toBe(3);
});


