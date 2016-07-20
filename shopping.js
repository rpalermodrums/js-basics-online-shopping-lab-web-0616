var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var arr = []
  for (i = 0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0];
    var value = cart[i][key];
    arr.push(`${key} at $${value}`);
  }
  if (cart.length == 0){
    return "Your shopping cart is empty.";
  }else {
    console.log(`In your cart, you have ${arr.join(", ")}.`);
  }
}

function removeFromCart(item){
  l = cart.length;
  for (i = 0; i < l; i++){
    if (Object.keys(cart[i])[0] == item) {
      delete cart[i];
    }
  }
  if (cart.length == l) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(card){
  if (card == undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var t = total()
    console.log(`Your total cost is $${t}, which will be charged to the card ${card}.`)
  }
  cart = []
}


function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
