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
    let productDetail = products.find((productDetail) => {
      return productDetail.id == id;
    });
    res.render(path.join("detail"), { productDetail });
  },

  carrito: (req, res) => {},

  contacto: (req, res) => {
    res.render(path.join("products", "contacto"), {
      datosAutoPartes,
      datosAutos,
    });
  },
};

module.exports = productController;
