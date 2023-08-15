const path = require("path");
const dataBase = require("../datos/products.json");

const editCreacionCointroller = {
  create: (req, res) => {
    res.render(path.join("products", "creacion"));
  },
  edit: (req, res) => {
    let id = req.params.id;
    let producto = dataBase.find((producto) => {
      return producto.id == id;
    });
    res.render(path.join("products", "edit"), { producto });
  },
};

module.exports = editCreacionCointroller;
