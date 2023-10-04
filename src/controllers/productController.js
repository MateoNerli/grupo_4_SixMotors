const path = require("path");
const db = require("../database/models");

const productController = {
  // productosVehiculos: (req, res) => {
  //   const vehiculosProducts = products.filter(
  //     (product) => product.type === "vehiculo"
  //   );
  //   res.render("products/productos", {
  //     products: vehiculosProducts,
  //   });
  // },
  // productosAutopartes: (req, res) => {
  //   const autopartesProducts = products.filter(
  //     (product) => product.type === "autoparte"
  //   );
  //   res.render("products/productos", {
  //     products: autopartesProducts,
  //   });
  // },
  list: async (req, res) => {
    const autos = await db.Product.findAll({
      where: {
        type: "vehiculo",
      },
    });
    const autoparte = await db.Product.findAll({
      where: {
        type: "autoparte",
      },
    });
    res.render("products/productos", { products: autos, products: autoparte });
  },
  detail: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    console.log("Product:", product);
    res.render(path.join("products", "detail"), { product });
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
  search: async (req, res) => {
    let result = [];

    for (let i = 0; i < db.length; i++) {
      if (
        db[i].name &&
        db[i].name.toLowerCase().includes(req.query.keywords.toLowerCase())
      ) {
        result.push(db[i]);
      }
    }
    res.render("products/resultSearch", {
      products: result,
      search: req.query.keywords,
    });
  },
};

module.exports = productController;
