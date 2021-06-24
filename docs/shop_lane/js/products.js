document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(location.search).get("product_id");
  load_product(id);
});

const load_product = async (id) => {
  const product = await fetchApiData(
    `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`
  );

  //Event Delegation
  document.body.addEventListener("click", (event) => {
    if (event.target && event.target.className == "non-active") {
      const active = document.getElementsByClassName("active")[0];
      active.classList.add("non-active");
      active.classList.remove("active");
      event.target.classList.add("active");
      event.target.classList.remove("non-active");
      const productImg = document.getElementById("productImg");
      productImg.src = event.target.src;
    }
  });

  const productImg = document.getElementById("productImg");
  productImg.src = product.photos[0];
  document.getElementById("name").innerText = product.name;
  document.getElementById("brand").innerText = product.brand;
  document.getElementById("price").innerText = `${product.price}/-`;
  document.getElementById("description").innerText = product.description;

  const previewImgs = document.getElementsByClassName("previewImg")[0];

  product.photos.forEach((img, i) => {
    const imgTag = document.createElement("img");
    imgTag.src = img;
    if (i == 0) {
      imgTag.classList.add("active");
    } else {
      imgTag.classList.add("non-active");
    }
    previewImgs.appendChild(imgTag);
  });

  //   console.log(product);
  shouldAddtoCart(product);
};
