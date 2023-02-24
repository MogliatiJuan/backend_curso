class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.stock ||
      !product.code
    ) {
      throw new Error("Todos los campos son requeridos");
    }

    if (this.products.some((p) => p.id === product.id)) {
      throw new Error("ID del producto ya existente");
    }

    if (this.products.some((p) => p.code === product.code)) {
      throw new Error("Codigo del producto ya existente");
    }

    product.id = this.nextId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.log("Not Found");
    }
    return product;
  }
}

const producto = new ProductManager();

producto.addProduct({
  title: "producto prueba",
  description: "este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

const allProducts = producto.getProducts();
console.log(allProducts);

const productById = producto.getProductById(1);
console.log(productById);