const path = require("path");
const datosAutos = require("../datos/autos.json");
const datosAutoPartes = require("../datos/autopartes.json");

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
