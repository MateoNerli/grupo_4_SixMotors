const path = require("path");

const userController = {
  home: (req, res) => {
    res.render("home");
  },
  login: (req, res) => {
    res.render(path.join("users", "login"));
  },
  register: (req, res) => {
    res.render(path.join("users", "register"));
  },
  usuario: (req, res) => {
    res.render(path.join("users", "usuario"));
  },
  detail: (req, res) => {
    res.render(path.join("products", "productDetail"));
  },
  carrito: (req, res) => {
    res.render(path.join("products", "carrito"));
  },
  autos: (req, res) => {
    res.render(path.join("products", "autos"));
  },
  autopartes: (req, res) => {
    res.render(path.join("products", "autopartes"));
  },
};

module.exports = userController;
