const db = require("../../database/models");

const orders = db.Order;

const ordersApi = {
  list: (req, res) => {
    let limit = req.query.limit || 0; // 0 significa sin límite
    limit = parseInt(limit); // Asegurarse de que limit sea un número entero

    let options = {};
    if (limit > 0) {
      options.limit = limit;
    }

    orders.findAll(options).then((orders) => {
      let respuesta = {
        meta: {
          status: 200,
          title: "Orders",
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
