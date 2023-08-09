const path = require("path");
const datosAutos = require("../datos/autos.json");
const datosAutoPartes = require("../datos/autopartes.json");

const homeController = {
  home: (req, res) => {
    res.render(path.join("home"), { datosAutos, datosAutoPartes });
  },
};

module.exports = homeController;
