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
      const page = req.query.page || 1;
      const limit = 15;
      const offset = (page - 1) * limit;

      if (type === 0) {
        products = await db.Product.findAll({
          where: { type: 0 },
          limit: limit,
          offset: offset,
        });
      } else if (type === 1) {
        products = await db.Product.findAll({
          where: { type: 1 },
          limit: limit,
          offset: offset,
        });
      } else {
        products = await db.Product.findAll({
          limit: limit,
          offset: offset,
        });
      }

      let totalProducts;
      if (type === 0) {
        totalProducts = await db.Product.count({ where: { type: 0 } });
      } else if (type === 1) {
        totalProducts = await db.Product.count({ where: { type: 1 } });
      } else {
        totalProducts = await db.Product.count();
      }
      const totalPages = Math.ceil(totalProducts / limit);

      res.render("products/productos", {
        products: products,
        currentPage: page,
        totalPages: totalPages,
        type: type,
      });
    } catch (error) {
      console.log(error);
    }
  },

  detail: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    const isAdmin = req.session.userLogged && req.session.userLogged.isAdmin;
    const products = await db.Product.findAll();
    res.render(path.join("products", "detail"), { product, isAdmin, products });
  },

  viewCart: (req, res) => {
    res.render(path.join("products", "carrito"), {
      carrito: req.session.carrito,
    });
  },

  contacto: async (req, res) => {
    const productId = await db.Product.findByPk(req.params.id);

    if (!productId) {
      return res.status(404).send("Producto no encontrado");
    }
    res.render(path.join("products", "contacto"), {
      productName: productId.name,
    });
  },
  search: async (req, res) => {
    try {
      const keywords = req.query.keywords;
      const products = await db.Product.findAll({
        where: {
          name: {
            [db.Sequelize.Op.like]: `%${keywords}%`,
          },
        },
      });
      res.render(path.join("products", "resultSearch"), { products, keywords });
    } catch (error) {
      console.error("Error al buscar productos:", error);
      // Maneja el error adecuadamente aquí
    }
  },
};

module.exports = productController;
