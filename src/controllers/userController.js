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
    const { name, lastName, email, password, repeatPassword } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    if (bcrypt.compareSync(repeatPassword, hashPassword)) {
      let nuevoUsuario = {
        id: usuarios.length + 1,
        name: name,
        lastName: lastName,
        email: email,
        password: hashPassword,
      };
      console.log(req.body);
      usuarios.push(nuevoUsuario);

      fs.writeFileSync(
        path.join(__dirname, "..", "datos", "users.json"),
        JSON.stringify(usuarios, null, 2)
      );
      res.redirect("/usuario/login");
    } else {
      res.redirect("/usuario/register", {
        error: error.mapped(),
        old: req.body,
      });
    }
  },

  editUser: (req, res) => {
    const {
      name,
      lastname,
      email,
      imgperfil, // Nueva imagen de perfil
      password,
      repeatPassword,
      reseñas,
      telefono,
      ciudad,
    } = req.body;

    const { id } = req.params;
    const usuarioId = usuarios.find((e) => e.id == id);

    // Verificar si se proporcionó una nueva imagen de perfil
    if (imgperfil) {
      usuarioId.imgperfil = imgperfil; // Actualizar la imagen de perfil
    }

    let usuarioEditado = {
      id: usuarioId.id,
      name: name,
      lastName: lastname,
      email: email,
      imgperfil: usuarioId.imgperfil, // Usar la imagen de perfil actualizada
      password: usuarioId.password,
      reseñas: reseñas,
      telefono: telefono,
      ciudad: ciudad,
    };

    usuarios[id - 1] = usuarioEditado;
    fs.writeFileSync(
      path.join(__dirname, "..", "datos", "users.json"),
      JSON.stringify(usuarios, null, 2)
    );
    res.redirect("/usuario/" + id);
  },
};

module.exports = userController;
