const db = require("../../database/models");

const products = db.Product;

const productsApi = {
  list: (req, res) => {
    products.findAll().then((products) => {
      let respuesta = {
        meta: {
          status: 200,
          total: products.length,
          url: "/api/products",
        },
        data: products,
      };
      res.json(respuesta);
    });
  },
  detail: (req, res) => {
    products.findByPk(req.params.id).then((product) => {
      let respuesta = {
        meta: {
          status: 200,
          total: product.length,
          url: "/api/products/:id",
        },
        data: product,
      };
      res.json(respuesta);
    });
  },
};

module.exports = productsApi;
