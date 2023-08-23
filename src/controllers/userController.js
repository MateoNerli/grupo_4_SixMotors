const path = require("path");
const products = require("../datos/products.json");

const userController = {
  login: (req, res) => {
    res.render(path.join("users", "login"));
  },
  register: (req, res) => {
    res.render(path.join("users", "register"));
  },
  usuario: (req, res) => {
    res.render(path.join("users", "usuario"));
  },
};

module.exports = userController;
