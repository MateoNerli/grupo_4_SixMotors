const path = require("path");
const products = require("../datos/products.json");
const usuarios = require("../datos/users.json");
const fs = require("fs");

const userController = {
  login: (req, res) => {
    res.render(path.join("users", "login"));
  },

  formRegister: (req, res) => {
    res.render(path.join("users", "register"));
  },

  register: (req, res) => {
    res.redirect("/");
  },

  usuario: (req, res) => {
    let id = req.params.id;
    let usuario = usuarios.find((usuario) => {
      return usuario.id == id;
    });
    res.render(path.join("users", "usuario"), { usuario });
  },
  edit: (req, res) => {
    let id = req.params.id;
    let usuario = usuarios.find((usuario) => {
      return usuario.id == id;
    });
    res.render(path.join("users", "edit-user"), { usuario });
  },
  editUser: (req, res) => {
    const {
      nombre,
      apellido,
      email,
      password,
      img,
      reseñas,
      telefono,
      ciudad,
    } = req.body;
    const { id } = req.params;

    //const newImg = { img: `/images/users/${req.file.filename}` };

    const usuario = usuarios.find((e) => e.id == id);

    // usuarios.push(newImg);

    if (!usuario) {
      res.status(404).send("Usuario no encontrado");
      return;
    }

    usuario.nombre = nombre || usuario.nombre;
    usuario.apellido = apellido || usuario.apellido;
    usuario.email = email || usuario.email;
    usuario.password = password || usuario.password;
    usuario.img = img || usuario.img;
    usuario.reseñas = reseñas || usuario.reseñas;
    usuario.telefono = telefono || usuario.telefono;
    usuario.ciudad = ciudad || usuario.ciudad;

    try {
      fs.writeFileSync(
        path.join(__dirname, "..", "datos", "users.json"),
        JSON.stringify(usuarios, null, 2)
      );
    } catch (error) {
      console.error(error);
      return;
    }

    res.redirect("/");
  },
};

module.exports = userController;
