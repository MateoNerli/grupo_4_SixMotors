const path = require("path");
const products = require("../datos/products.json");
const usuarios = require("../datos/users.json");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const userController = {
  login: (req, res) => {
    res.render(path.join("users", "login"));
  },

  formRegister: (req, res) => {
    res.render(path.join("users", "register"));
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

  register: (req, res) => {
    const imgperfil = req.file.filename;

    const {
      name,
      lastname,
      user,
      email,
      password,
      repeatPassword,
      reseñas,
      telefono,
      ciudad,
    } = req.body;

    const newUser = {
      id: usuarios.length + 1,
      name,
      lastname,
      user,
      email,
      imgperfil,
      password: bcrypt.hashSync(password, 10),
      repeatPassword,
      reseñas,
      telefono,
      ciudad,
    };

    usuarios.push(newUser);
    fs.writeFileSync(
      path.join(__dirname, "..", "datos", "users.json"),
      JSON.stringify(usuarios, null, 2)
    );
    res.redirect("/login");
  },

  // editUser: (req, res) => {
  //   const {
  //     name,
  //     lastname,
  //     user,
  //     email,
  //     imgperfil,
  //     password,
  //     repeatPassword,
  //     reseñas,
  //     telefono,
  //     ciudad,
  //   } = req.body;

  //   const { id } = req.params;
  //   const usuarioId = usuarios.find((e) => e.id == id);

  //   if (imgperfil) {
  //     usuarioId.imgperfil = imgperfil;
  //   }

  //   let usuarioEditado = {
  //     id: usuarioId.id,
  //     name: name,
  //     lastName: lastname,
  //     user: user,
  //     email: email,
  //     imgperfil: usuarioId.imgperfil,
  //     password: usuarioId.password,
  //     reseñas: reseñas,
  //     telefono: telefono,
  //     ciudad: ciudad,
  //   };

  //   usuarios[id - 1] = usuarioEditado;
  //   fs.writeFileSync(
  //     path.join(__dirname, "..", "datos", "users.json"),
  //     JSON.stringify(usuarios, null, 2)
  //   );
  //   res.redirect("/usuario/" + id);
  // },
};

module.exports = userController;
