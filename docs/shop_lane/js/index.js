document.addEventListener('DOMContentLoaded', function() {

    let nav = document.querySelector(".nav-links");
    let burger = document.querySelector(".burger");

    burger.addEventListener("click", function() {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });

    burger.classList.remove('toggle');
    // nav.classList.remove('nav-active');
    // nav.classList.add('nav-active');

    const clothingCards = document.getElementById('clothingCards')
    const accessoriesCards = document.getElementById('accessoriesCards');

    productList.map((product, i) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img');
        const imgTag = document.createElement('img');
        imgTag.src = product.preview;
        imgWrapper.appendChild(imgTag);

        const productDetails = document.createElement('div');
        productDetails.classList.add('details');

        const name = document.createElement('h3');
        name.innerHTML = product.name;
        const brand = document.createElement('h4');
        brand.innerHTML = product.brand;
        const cost = document.createElement('h5');
        cost.innerHTML = "Rs " + product.price;

        productDetails.appendChild(name);
        productDetails.appendChild(brand);
        productDetails.appendChild(cost);

        card.appendChild(imgWrapper);
        card.appendChild(productDetails);

        if (i < 5) {
            clothingCards.appendChild(card);
        } else {
            accessoriesCards.appendChild(card);
        }
    })
});