function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const products = [
                { id: 101, name: "mAcBook PrO", price: 2500, inStock: true },
                { id: 102, name: "iPhOnE 15", price: 1200, inStock: false },
                { id: 103, name: "AiRpOds mAx", price: 500, inStock: true },
                { id: 104, name: "iPaD AiR", price: 800, inStock: true },
                { id: 105, name: "ApPle WaTcH", price: 400, inStock: false }
            ];

            resolve(products);
        }, 2000);
    });
}

async function initInventory() {
    try {
        const products = await getProducts();
        //Normalized letters and apply a 15% tax
        const normalizedProducts = products.map(product => {
            return {
            ...product,
            name:product.name.toLowerCase(),
            price: Math.round(product.price * 1.15)
        };
    });

    const container = document.getElementById("inventory-container");

    normalizedProducts.forEach(product => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Precio con impuesto: $${product.price}</p>
        <p>Disponible: ${product.inStock ? "Sí" : "No"}</p>
        <button ${!product.inStock ? "disabled" : ""}>
          ${product.inStock ? "Comprar" : "Agotado"}
        </button>
      `;

      const button = card.querySelector("button");

      button.addEventListener("click", () => {
        product.inStock = false;
        card.classList.add("sold");
        button.textContent = "Comprado ✔";
        button.disabled = true;

        const availabilityText = card.querySelector("p:nth-of-type(2)");
        availabilityText.textContent = "Disponible: No";

      });

      container.appendChild(card);

    });
        
    console.log(products);
    } catch (error) {
        console.log("Error cargando productos", error);
    }
}

initInventory();