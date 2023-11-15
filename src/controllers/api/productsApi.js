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
  create: (req, res) => {
    products
      .create({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        img: req.file.filename,
        colors: req.body.colors,
        price: req.body.price,
        marked: req.body.marked,
        is_km: req.body.is_km,
        year: req.body.year,
      })
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/products/create",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/products/create",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
  update: (req, res) => {
    let productId = req.params.id;
    products
      .update(
        {
          name: req.body.name,
          type: req.body.type,
          description: req.body.description,
          img: req.file.filename,
          colors: req.body.colors,
          price: req.body.price,
          marked: req.body.marked,
          is_km: req.body.is_km,
          year: req.body.year,
        },
        {
          where: { id: productId },
        }
      )
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/products/update/:id",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "api/products/update/:id",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
  destroy: (req, res) => {
    let productId = req.params.id;
    products
      .destroy({ where: { id: productId }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/product/delete/:id",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "api/product/delete/:id",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
};

module.exports = productsApi;
