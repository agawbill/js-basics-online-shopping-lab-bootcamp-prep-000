var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

  function addToCart(item, object) {
let price= Math.floor(Math.random() * 101);


object = {
  itemName: item,
  itemPrice: price
}
 cart.push(object);
return `${item} has been added to your cart.`
}

function viewCart(itemName, itemPrice){
var array=[]
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  for (var i=0; i < cart.length; i++){
    array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cart.length < 3)
return `In your cart, you have ${array.join(" and ")}.`
else (cart.length === 3)
return `In your cart, you have ${array.slice(0,2).join(", ")} and ${array.pop()}.`
}


function total() {
  const sum= (total, amount) => total + amount
  var array=[]
for (var i=0; i < cart.length; i++){
    array.push(cart[i].itemPrice)
  }
return array.reduce(sum)
}


function removeFromCart(item, itemName) {
  var array=[]
   for (var i=0; i < cart.length; i++){
    array.push(cart[i].itemName)
  }
if (array[itemName] != item) 
return "That item is not in your cart."

else (array.itemName == item)
array.splice(item)
return array
}

function placeOrder(cardNumber) {
  // write your code here
}
