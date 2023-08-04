const path = require("path"); //requiero path

const userController = {
  home: (req, res) => {
    res.render("home2");
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  usuario: (req, res) => {
    res.render("usuario");
  },
  detail: (req, res) => {
    res.render("productDetail");
  },
  carrito: (req, res) => {
    res.render("carrito");
  },
  autos: (req, res) => {
    res.render("autos");
  },
  autopartes: (req, res) => {
    res.render("autopartes");
  },
};

module.exports = userController;
