const db = require("../database/models");
const path = require("path");

const homeController = {
  home: async (req, res) => {
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
    const usuarios = await db.User.findAll();
    res.render(path.join("home"), { autos, autoparte, usuarios });
  },
  cart: function (req, res) {
    res.render(path.join("products", "carrito"));
  },
  order: async (req, res) => {
    let order = await db.Order.findByPk(req.params.id, {
      include: db.Order.OrderItems,
    });
    // res.send(order);
    return res.render("order", { order });
  },
};

module.exports = homeController;
