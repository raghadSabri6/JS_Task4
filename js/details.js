function getDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id);

    axios.get(`https://dummyjson.com/products/${id}`)
        .then(function(response) {
            const {title, description, price, brand, category, thumbnail} = response.data;
            const result = `
            <div class="detail">
                <h2>${title}</h2>
                <img src="${thumbnail}" alt="${title}">
                <p>${description}</p>
                <p>Price: ${price}</p>
                <p>Brand: ${brand}</p>
                <p>Category: ${category}</p>
            </div>
            `;
            document.querySelector('.details').innerHTML = result;  
        })
        .catch(function(error) {
            console.error('Error fetching product details:', error);
        });
}

getDetails();
