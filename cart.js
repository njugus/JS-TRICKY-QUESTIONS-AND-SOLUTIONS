// e-commerce cart syste
let cart = [
    { product: 'Laptop', price: 1000, quantity: 1 },
    { product: 'Phone', price: 500, quantity: 2 }
]

//add items to a cart
function addItemsToCart(productName, price, quantity){
    let product = cart.find((p) => { return p.product == productName})
    if(product){
        product.quantity += quantity;
    }  
    else{
        cart.push({product : productName, price, quantity})
    }
    return cart
}

//remove items from the cart
function removeItemsFromCart(productName){
    let newCart = cart.filter(p => { return p.product !== productName})
    return newCart
}

//add the total of all items in the cart
function findTotalPrice(){
    let totalPrice = cart.map(p => { return p.price * p.quantity })
    let totalPayablePrice = totalPrice.reduce((total, itemPrice) => total + itemPrice, 0)
    return totalPayablePrice;
}
console.log(removeItemsFromCart("Pizza"));

export default addItemsToCart;




