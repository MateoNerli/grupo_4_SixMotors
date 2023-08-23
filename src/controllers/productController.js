const path = require("path");
const products = require("../datos/products.json");

const productController = {
  productosVehiculos: (req, res) => {
    const vehiculosProducts = products.filter(
      (product) => product.type === "vehiculo"
    );
    res.render("products/productos", {
      products: vehiculosProducts,
    });
  },
  productosAutopartes: (req, res) => {
    const autopartesProducts = products.filter(
      (product) => product.type === "autoparte"
    );
    res.render("products/productos", {
      products: autopartesProducts,
    });
  },
  detail: (req, res) => {
    let id = req.params.id;
    let product = products.find((product) => {
      return product.id == id;
    });
    res.render(path.join("products", "detail"), {
      product,
      products,
    });
  },

  carrito: (req, res) => {
    res.render(path.join("products", "carrito"), {
      products,
    });
  },

  contacto: (req, res) => {
    res.render(path.join("products", "contacto"), {
      products,
    });
  },
};

module.exports = productController;
