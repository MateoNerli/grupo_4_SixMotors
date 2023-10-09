const db = require("../database/models");
const path = require("path");

const homeController = {
  home: async (req, res) => {
    const autos = await db.Product.findAll({
      where: {
        type: 1,
      },
    });
    const autos0KM = await db.Product.findAll({
      where: {
        type: 0,
        is_km: 1,
      },
    });
    const autoUsado = await db.Product.findAll({
      where: {
        type: 0,
        is_km: 0,
      },
    });
    const autoparte = await db.Product.findAll({
      where: {
        type: 0,
      },
    });
    const marked = await db.Product.findAll({
      where: {
        marked: 1,
      },
    });
    const usuarios = await db.User.findAll();
    res.render(path.join("home"), {
      autos,
      autoparte,
      usuarios,
      marked,
      autos0KM,
      autoUsado,
    });
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
