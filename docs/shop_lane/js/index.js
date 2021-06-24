document.addEventListener("DOMContentLoaded", async function () {
  const productList = await fetchApiData(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
  );
  const nav = document.querySelector(".nav-links");
  let burger = document.querySelector(".burger");

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });

  burger.classList.remove("toggle");
  // nav.classList.remove('nav-active');
  // nav.classList.add('nav-active');

  const clothingCards = document.getElementById("clothingCards");
  const accessoriesCards = document.getElementById("accessoriesCards");

  productList.forEach((product, i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const productAnchor = document.createElement("a");
    productAnchor.href = "products.html?product_id=" + product.id;

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img");
    const imgTag = document.createElement("img");
    imgTag.src = product.preview;
    imgWrapper.appendChild(imgTag);

    const productDetails = document.createElement("div");
    productDetails.classList.add("details");

    const name = document.createElement("h3");
    name.innerHTML = product.name;
    const brand = document.createElement("h4");
    brand.innerHTML = product.brand;
    const cost = document.createElement("h5");
    cost.innerHTML = "Rs " + product.price;

    productDetails.appendChild(name);
    productDetails.appendChild(brand);
    productDetails.appendChild(cost);

    productAnchor.appendChild(imgWrapper);
    productAnchor.appendChild(productDetails);
    card.appendChild(productAnchor);

    if (product.isAccessory) {
      accessoriesCards.appendChild(card);
    } else {
      clothingCards.appendChild(card);
    }
  });
});
