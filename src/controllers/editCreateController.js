const path = require("path");
const dataBase = require("../datos/products.json");
const fs = require("fs");

const editCreacionCointroller = {
  create: (req, res) => {
    res.render(path.join("products", "creacion"));
  },
  createPost: (req, res) => {
    const { name, type, description, img, category, colors, price } = req.body;

    const newProduct = {
      id: (dataBase.length + 1).toString(),
      type: type,
      title: name,
      description: description,
      img: img,
      category: category,
      colors: colors,
      price: parseFloat(price),
    };

    dataBase.push(newProduct);

    try {
      fs.writeFileSync(
        path.join(__dirname, "..", "datos", "products.json"),
        JSON.stringify(dataBase, null, 2)
      );
      console.log("Product added");
    } catch (error) {
      console.error("Error writing to products.json:", error);
    }

    res.redirect("/");
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
