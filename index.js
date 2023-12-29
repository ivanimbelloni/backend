import Product from "./classes/product.js";
import ProductManager from "./classes/productManager.js";

const prodManager = new ProductManager()

const prod1 = new Product(
    "iphone",
    "white",
    800,
    "",
    "ip002",
    21,
    []
)
const prod2 = new Product(
    "iphone pro",
    "black",
    1100,
    "",
    "ip020",
    21,
    []
)
const prod3 = new Product(
    "iphone plus",
    "blue",
    900,
    "",
    "ip012",
    21,
    []
)
const prod4 = new Product(
    "ipad",
    "white",
    1200,
    "",
    "ipa022",
    21,
    []
)
//Iniciar
await prodManager.initialize()
//Agregar
await prodManager.addProduct(prod1)
await prodManager.addProduct(prod2)
await prodManager.addProduct(prod3)
await prodManager.addProduct(prod4)
//lista de prods
await prodManager.getProducts()
//Borrar prods
await prodManager.deleteProd(2)
await prodManager.getProducts()

//actualizar
await prodManager.updateProd(3,{
    title:"iphone plus",
    description: "blue",
    price: 600,
    thumbnail: "",
    code: "ip012",
    stock: 21,
})


await prodManager.getProdById(3)
await prodManager.getProdById(1)