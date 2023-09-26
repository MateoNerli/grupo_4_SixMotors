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
    } else {
      return res.render(path.join("users", "login"), {
        errors: {
          NoUser: {
            msg: "No existe ese usuario",
          },
        },
      });
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

  registerProcess: async (req, res) => {
    const resultValidation = validationResult(req);

    // Verificar si el nombre de usuario (user) ya está en uso
    let userInDB = User.findByField("user", req.body.user);
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

    // En este punto, todas las validaciones han pasado, incluyendo la validación de los campos del formulario.

    // Verificar si se ha cargado una imagen, y si no, mostrar un error
    if (!req.file) {
      return res.render(path.join("users", "register"), {
        errors: {
          imgperfil: {
            msg: "Tienes que subir una imagen",
          },
        },
        oldData: req.body,
      });
    }

    //si hay errores de validacion, renderiza el formulario nuevamente
    if (resultValidation.errors.length > 0) {
      return res.render(path.join("users", "register"), {
        errors: resultValidation.mapped(),
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
      imgperfil: req.file.filename, // Asignar el nombre de la imagen.
    };

    // Guardar el usuario en la base de datos
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
};

module.exports = userController;
