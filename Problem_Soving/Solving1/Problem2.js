// Problem 20: Build a Shopping Cart

// Create a shopping cart system using JavaScript.

// Requirements:

// Add a product to the cart.
// Remove a product from the cart.
// Increase or decrease product quantity.
// Calculate the total price.
// Apply a 10% discount when the total reaches 1,000.
// Display the final bill.

// Example:

const cart = [
  { name: "Keyboard", price: 500, quantity: 2 },
  { name: "Mouse", price: 300, quantity: 1 }
]; 
function addProduct(cart,name,price,quantity){
  const existingProduct = cart.find(item => item.name === name)
  if(existingProduct){
    existingProduct.quantity += quantity;
  }
  else{
    cart.push({name,price,quantity})
  }
}

function removeProduct(cart,name){
 return cart.filter(item => item.name !== name)
}

function updateQuantity(cart,name,amount){
  const product = cart.find(item => item.name === name);
  if(product)
  {
    product.quantity += amount;
    if(product.quantity > 0){
      product.quantity = 0;
       
    }
  }
}
function calculatePrice(cart){
  const totalPrice = cart.reduce((total,item) => total+(item.price*item.amount),0)

}

 

// Expected calculations:

// Keyboard: 500 × 2 = 1,000
// Mouse: 300 × 1 = 300
// Subtotal: 1,300
// Discount: 130
// Final total: 1,170
