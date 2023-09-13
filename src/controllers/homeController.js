const path = require("path");
const products = require("../datos/products.json");
const users = require("../datos/users.json");

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
