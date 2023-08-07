const path = require("path");
const datosAutos = require("../datos/autos.json");
const datosAutoPartes = require("../datos/autopartes.json");

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
    res.render(path.join("products", "autos"), { datosAutos });
  },
  autopartes: (req, res) => {
    res.render(path.join("products", "autopartes"), { datosAutoPartes });
  },
};

module.exports = userController;
