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
  list: async (req, res, type) => {
    try {
      let products;

      if (type === 0) {
        // Consulta para obtener todos los productos de tipo "vehiculo"
        products = await db.Product.findAll({
          where: {
            type: 0,
          },
        });
      } else if (type === 1) {
        // Consulta para obtener todos los productos de tipo "autoparte"
        products = await db.Product.findAll({
          where: {
            type: 1,
          },
        });
      } else {
        // Si se proporciona un tipo desconocido, muestra todos los productos
        products = await db.Product.findAll();
      }

      res.render(path.join("products", "productos"), { products });
    } catch (error) {
      console.error("Error al obtener productos:", error);
      // Maneja el error adecuadamente aquí
    }
  },

  detail: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    const isAdmin = req.session.userLogged && req.session.userLogged.isAdmin;
    const products = await db.Product.findAll();
    // console.log("Product:", product);
    res.render(path.join("products", "detail"), { product, isAdmin, products });
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
    try {
      const products = await db.Product.findAll({
        where: {
          name: {
            [db.Sequelize.Op.like]: `%${req.query.keywords}%`,
          },
        },
      });
      res.render(path.join("products", "productos"), { products });
    } catch (error) {
      console.error("Error al buscar productos:", error);
      // Maneja el error adecuadamente aquí
    }
  },
};

module.exports = productController;
