function getProducts() {
    axios.get('https://dummyjson.com/products')
        .then(function(response) {
            const products = response.data.products;
            const results = products.map(function(product) {
                return `
                <div class="product">
                   <h2>${product.title}</h2>
                   <img src="${product.thumbnail}" alt="${product.title}"/>
                   <a href="../html/details.html?id=${product.id}">View Product</a>
                </div>
                `;
            }).join("");
            document.querySelector('.products').innerHTML = results;
        })
        .catch(function(error) {
            console.error('Error fetching products:', error);
        });
}

getProducts();
