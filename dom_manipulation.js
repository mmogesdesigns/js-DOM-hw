let products = [
  {
    name: "Laptop",
    price: 999.99,
    description: "Powerful computing on the go",
  },
  {
    name: "Smartphone",
    price: 699.99,
    description: "Stay connected wherever you are",
  },
  {
    name: "Headphones",
    price: 149.99,
    description: "Immersive audio experience",
  },
];

function displayProducts(){
    const container = document.getElementById("product-container");
    container.innerHTML = ' ';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
        <h2> ${product.name} </h2>
        <p> Price: $${product.price} </p>
        <p> Description: ${product.description} </p>`;
        container.appendChild(productDiv);        
    });
}
document.addEventListener('DOMContentLoaded', function(){
    displayProducts();
});
 