const path = require("path");
const products = require("../database/products.json");
const usuarios = require("../database/users.json");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

const userController = {
  fromLogin: (req, res) => {
    res.render(path.join("users", "login"));
  },

  loginProcess: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
        }

        return res.redirect("/user/profile");
      }
      return (
        path.join("users", "login"),
        {
          errors: {
            email: {
              msg: "Las credenciales son inválidas",
            },
          },
        }
      );
    }

    return (
      path.join("users", "login"),
      {
        errors: {
          email: {
            msg: "No se encuentra este email en nuestra base de database",
          },
        },
      }
    );
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

  registerProcess: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render(path.join("users", "register"), {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    // Validar que password y repeatPassword sean iguales
    if (req.body.password !== req.body.repeatPassword) {
      return res.render(path.join("users", "register"), {
        errors: {
          password: {
            msg: "Las contraseñas no coinciden",
          },
        },
        oldData: req.body,
      });
    }

    // Verificar si el nombre de usuario (user) ya está en uso
    userInDB = User.findByField("user", req.body.user);
    if (userInDB) {
      return res.render(path.join("users", "register"), {
        errors: {
          user: {
            msg: "Este usuario ya está registrado",
          },
        },
        oldData: req.body,
      });
    }
    // Verificar si el email ya está en uso
    userInDB = User.findByField("email", req.body.email);
    if (userInDB) {
      return res.render(path.join("users", "register"), {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }

    // Encriptar la contraseña antes de guardarla en la base de datos.
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    // Eliminar el campo repeatPassword antes de guardar el usuario.
    const { repeatPassword, ...userWithoutRepeatPassword } = req.body;

    let userToCreate = {
      ...userWithoutRepeatPassword, // Usar los datos del usuario sin repeatPassword.
      password: hashedPassword, // Guardar la contraseña encriptada.
      imgperfil: req.file.filename,
    };

    let userCreated = User.create(userToCreate);

    return res.redirect("/user/login");
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  profile: (req, res) => {
    return res.render(path.join("users", "perfil"), {
      user: req.session.userLogged,
    });
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
  //     path.join(__dirname, "..", "database", "users.json"),
  //     JSON.stringify(usuarios, null, 2)
  //   );
  //   res.redirect("/usuario/" + id);
  // },
};

module.exports = userController;
