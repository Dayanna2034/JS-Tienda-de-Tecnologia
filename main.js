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
        console.log(products);
    } catch (error) {
        console.log("Error cargando productos", error);
    }
}