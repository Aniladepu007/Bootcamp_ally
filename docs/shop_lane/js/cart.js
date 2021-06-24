const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const getItemCount = () => {
  const cart = getCart();
  let count = 0;
  cart.forEach((item) => (count += item.quantity));
  return count;
};

const updateCart = () => {
  const itemCount = document.getElementById("cart-count");
  itemCount.innerText = getItemCount();
};

const shouldAddtoCart = (item) => {
  const cart_btn = document.getElementById("add-to-cart");
  cart_btn.addEventListener("click", (event) => {
    const cart = getCart();
    const index = cart.findIndex((c) => c.id === item.id);
    if (index === -1) {
      cart.push({ ...item, quantity: 1 });
    } else {
      cart[index].quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  });
};

updateCart();
