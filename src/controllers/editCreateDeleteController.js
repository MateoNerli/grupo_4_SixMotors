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
      img: `/images/products/${req.file.filename}`,
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
      console.log("Producto añadido");
    } catch (error) {
      console.error(error);
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

  editPost: (req, res) => {
    const { name, type, description, img, category, colors, price } = req.body;
    const { id } = req.params;
    const productoId = dataBase.find((e) => e.id == id);

    name ? (productoId.name = name) : productoId.name;
    type ? (productoId.type = type) : productoId.type;
    description
      ? (productoId.description = description)
      : productoId.description;
    price ? (productoId.price = price) : productoId.price;
    img ? (productoId.img = img) : productoId.img;
    category ? (productoId.category = category) : productoId.category;
    colors ? (productoId.colors = colors) : productoId.colors;

    try {
      fs.writeFileSync(
        path.join(__dirname, "..", "datos", "products.json"),
        JSON.stringify(products, null, 2)
      );
    } catch (error) {
      console.error(error);
    }

    res.redirect("/");
  },
  eliminar: (req, res) => {
    let id = req.params.id;
    let producto = dataBase.find((producto) => {
      return producto.id == id;
    });
    let index = dataBase.indexOf(producto);
    dataBase.splice(index, 1);
    try {
      fs.writeFileSync(
        path.join(__dirname, "..", "datos", "products.json"),
        JSON.stringify(dataBase, null, 2)
      );
      console.log("Product eliminado");
    } catch (error) {
      console.error(error);
    }
    res.redirect("/");
  },
};

module.exports = editCreacionCointroller;
