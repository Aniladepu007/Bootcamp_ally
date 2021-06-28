document.addEventListener("DOMContentLoaded", () => {
  const cart = getCart();
  const noOfItems = document.getElementById("cart-count");
  noOfItems.innerText = getItemCount();

  const cartItemContainer = document.getElementById("cart-item-container");

  let cartValue = 0;
  //   console.log(cart);

  cart.forEach((item) => {
    const cartProduct = document.createElement("div");
    cartProduct.classList.add("item");
    const itemImg = document.createElement("img");
    itemImg.src = item.preview;
    const description = document.createElement("div");
    description.classList.add("detail");
    const heading = document.createElement("h3");
    heading.innerText = item.name;
    const itemCount = document.createElement("p");
    itemCount.innerText = "x" + item.quantity;
    const itemPrice = document.createElement("p");
    itemPrice.innerText = "Amount: " + item.price * item.quantity;
    cartValue += item.quantity * item.price;
    cartItemContainer.appendChild(cartProduct);
    description.appendChild(heading);
    description.appendChild(itemCount);
    description.appendChild(itemPrice);
    cartProduct.appendChild(itemImg);
    cartProduct.appendChild(description);
  });

  const cartValueTag = document.getElementById("total-amount");
  cartValueTag.innerText = cartValue;

  const placeOrderTag = document.getElementById("place-order");
  placeOrderTag.onclick = (e) => {
    deleteCart();
    updateCart();
  };
});
