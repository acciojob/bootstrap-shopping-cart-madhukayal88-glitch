<script>
  const products = [
    {
      name: "Product Name 1",
      description: "Short description of the product. Stylish, durable, and lightweight.",
      price: 1200,
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Product Name 2",
      description: "High-quality product with modern design and excellent performance.",
      price: 2200,
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Product Name 3",
      description: "Premium quality product that ensures satisfaction and durability.",
      price: 1800,
      image: "https://via.placeholder.com/150"
    }
  ];

  const productContainer = document.querySelector('.col-lg-8');

  products.forEach(product => {
    const productHTML = `
      <div class="product">
        <div class="row">
          <div class="col-md-4">
            <img src="${product.image}" class="img-fluid" alt="${product.name}">
          </div>
          <div class="col-md-8">
            <h5>${product.name}</h5>
            <p>${product.description}</p>
            <p><strong>₹${product.price}</strong></p>
            <div class="input-group mb-3">
              <button class="btn btn-outline-secondary" type="button">-</button>
              <input type="text" class="form-control" value="1" aria-label="Quantity">
              <button class="btn btn-outline-secondary" type="button">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
    productContainer.innerHTML += productHTML;
  });
</script>