const path = require("path");
const products = require("../database/products.json");

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
  viewCart: (req, res) => {
    res.render(path.join("products", "carrito"), {
      carrito: req.session.carrito,
    });
  },
  contacto: (req, res) => {
    res.render(path.join("products", "contacto"), {
      products,
    });
  },
  search: (req, res) => {
    let result = [];
    for (let i = 0; i < products.length; i++) {
      if (
        products[i].title &&
        products[i].title
          .toLowerCase()
          .includes(req.query.keywords.toLowerCase())
      ) {
        result.push(products[i]);
      }
    }
    res.render("products/resultSearch", {
      products: result,
      search: req.query.keywords,
    });
  },
};

module.exports = productController;
