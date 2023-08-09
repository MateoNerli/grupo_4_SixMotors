const path = require("path");
const datosAutos = require("../datos/autos.json");
const datosAutoPartes = require("../datos/autopartes.json");

const productController = {
  detailAutos: (req, res) => {
    let id = req.params.id;
    let auto = datosAutos.find((auto) => {
      return auto.id == id;
    });
    res.render(path.join("products", "productDetailAuto"), {
      auto,
      datosAutos,
    });
  },
  detailAutopartes: (req, res) => {
    let id = req.params.id;
    let productoAP = datosAutoPartes.find((productoAP) => {
      return productoAP.id == id;
    });
    res.render(path.join("products", "productDetail"), {
      productoAP,
      datosAutoPartes,
    });
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

module.exports = productController;
