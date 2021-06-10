// let title;
// let productElement, imageElement;
// const products = document.getElementById("products")
// for (let product of productList) {
//     const { name, description, preview } = product;
//     productElement = document.createElement('div');
//     productElement.style.width = '15%';
//     productElement.style.color = 'red';
//     productElement.textContent = name;

//     // Description
//     descriptionElement = document.createElement('p');
//     descriptionElement.textContent = description;
//     descriptionElement.style.color = 'blue';
//     productElement.appendChild(descriptionElement)

//     //Image
//     imageElement = document.createElement('img');
//     imageElement.src = preview;
//     imageElement.width = '300';
//     productElement.appendChild(imageElement)


//     //Append ALL
//     products.appendChild(productElement)
// }
// for (let i = 0; i < 3; i++) {
//     title = document.createElement('h1')
//     title.className = "title"
//     title.textContent = i
//     title.style.fontSize = '50px';
//     title.style.color = 'red';
//     document.body.appendChild(title)

// }

// const randColor = () => {
//     var letters = "0123456789ABCDEF";
//     var color = "#";
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };
// const button = document.querySelector("button");
// const count = document.querySelector("#count");
// button.addEventListener("click", (event) => {
//     const parentBox = document.getElementById("box");

//     while (parentBox.firstChild) {
//         parentBox.removeChild(parentBox.lastChild);
//     }
//     parentBox.innerHTML = "";
//     for (var i = 0; i < parseInt(count.value); i++) {
//         const child = document.createElement("div");
//         child.style.border = "5px solid" + randColor();
//         child.style.background = randColor();
//         child.classList.add("child");
//         parentBox.appendChild(child);
//     }
// });