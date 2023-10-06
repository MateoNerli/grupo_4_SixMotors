const path = require("path");
// const dataBase = require("../database/products.json");
// const fs = require("fs");
const db = require("../database/models");
const editCreacionCointroller = {
  create: (req, res) => {
    res.render(path.join("products", "creacion"));
  },
  store: async function (req, res) {
    let image = "";
    if (req.file) {
      image = req.file.filename;
    }

    //guardo el nuevo producto con la estructura
    await db.Product.create({
      type: req.body.type,
      name: req.body.name,
      description: req.body.description,
      img: image,
      //  category: req.body.category,
      colors: req.body.colors,
      price: req.body.price,
      marked,
      km: km === "1", // Si km es '1', será true, de lo contrario, será false
      year: req.body.year,
    });

    //redireccione al home
    return res.redirect("/");
  },
  edit: async function (req, res) {
    let product = await db.Product.findByPk(req.params.id);
    if (product) {
      return res.render("products/edit", { product });
    }
    return res.redirect("/products");
  },

  update: async function (req, res) {
    let product = await db.Product.findByPk(req.params.id);
    if (product) {
      let image = product.img;
      if (req.file) {
        image = req.file.filename;
      }
      await product.update({
        type: req.body.type,
        name: req.body.name,
        description: req.body.description,
        img: image,
        category: req.body.category,
        colors: req.body.colors,
        price: req.body.price,
        marked: req.body.marked ? true : false,
      });
    }
    return res.redirect("/");
  },
  delete: async function (req, res) {
    await db.Product.destroy({
      where: { id: req.params.id },
    });

    res.redirect("/");
  },
};

module.exports = editCreacionCointroller;
