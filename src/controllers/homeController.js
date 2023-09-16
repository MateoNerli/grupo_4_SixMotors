const path = require("path");
const products = require("../database/products.json");
const users = require("../database/users.json");

const homeController = {
  home: (req, res) => {
    const autos = products.filter((autos) => {
      return autos.type == "vehiculo";
    });
    const autoparte = products.filter((autoparte) => {
      return autoparte.type == "autoparte";
    });
    const usuarios = users;
    res.render(path.join("home"), { autos, autoparte, usuarios });
  },
};

module.exports = homeController;
