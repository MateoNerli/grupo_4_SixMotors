const db = require("../../database/models");

const orders = db.Order;

const ordersApi = {
  list: (req, res) => {
    orders.findAll().then((orders) => {
      let respuesta = {
        meta: {
          status: 200,
          title: "Ordenes",
          total: orders.length,
          url: "/api/orders",
        },
        data: orders,
      };
      res.json(respuesta);
    });
  },
  detail: (req, res) => {
    orders.findByPk(req.params.id).then((order) => {
      let respuesta = {
        meta: {
          status: 200,
          total: order ? 1 : 0,
          url: "/api/order/:id",
        },
        data: order,
      };
      res.json(respuesta);
    });
  },
};

module.exports = ordersApi;
