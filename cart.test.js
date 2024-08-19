import addItemsToCart from "./cart.js";

//use toEqual() to check the equqlity of both objects and arrays in js.
//it checks the structure and the individual elements and also their order..

//toBE used coz it checks for strict operator operations that is it checks whetehr the value
//returned by the function has a similar memory addrss as the value refrenced in the to be matcher.
test("{product : Pizza, price : 1000, quantity : 1}", () => {
  expect(addItemsToCart("Pizza", 1000, 1)).toEqual([
    { product: 'Laptop', price: 1000, quantity: 1 },
    { product: 'Phone', price: 500, quantity: 2 },  
    { product: 'Pizza', price: 1000, quantity: 1 }  
  ]);
});
