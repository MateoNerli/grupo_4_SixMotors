const path = require("path");
// const products = require("../database/products.json");
// const usuarios = require("../database/users.json");
// const fs = require("fs");
// const bcrypt = require("bcryptjs");
// const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");
const { validationResult } = require("express-validator");

const userController = {
  fromLogin: (req, res) => {
    res.render(path.join("users", "login"));
  },

  loginProcess: async (req, res) => {
    // Validar los datos
    let errores = validationResult(req);

    // Si hay errores, retornarlos a la vista
    if (!errores.isEmpty()) {
      let errors = errores.mapped();
      console.log(errors);
      return res.render("users/login", { errors: errors, olds: req.body });
    }

    // Leer el usuario desde la base de datos
    let user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // Buscar al usuario
    if (user) {
      let passOk = bcryptjs.compareSync(req.body.password, user.password);
      if (passOk) {
        // Si la contraseña es correcta, se guarda el usuario en la sesión
        req.session.userLogged = user;
        req.session.lastActivity = Date.now();

        // Si recordar usuario está activado, enviar una cookie con el email
        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, {
            maxAge: 1000 * 60 * 60,
            secure: true,
            httpOnly: true,
          });
        }
        // Redirigir al menú de usuario
        return res.redirect("/user/profile");
      } else {
        // Si la contraseña no es correcta, devolver el error
        return res.render("users/login", {
          errors: {
            password: {
              msg: "La contraseña es incorrecta.",
            },
          },
          olds: req.body,
        });
      }
    } else {
      // El usuario no existe, devolver el error
      return res.render("users/login", {
        errors: {
          email: {
            msg: "El email no está registrado.",
          },
        },
        olds: req.body,
      });
    }
  },

  formRegister: (req, res) => {
    res.render(path.join("users", "register"));
  },

  registerProcess: async (req, res) => {
    //validar los datos
    let errores = validationResult(req);

    //si hay errores, retornarlos a la vista
    if (!errores.isEmpty()) {
      let errors = errores.mapped();
      console.log(errors);
      return res.render("/users/register", { errors: errors, olds: req.body });
    }

    let image = "";
    if (req.file) {
      image = req.file.filename;
    }

    //busco si el usuario ya existe
    let user = await db.User.findOne({
      where: {
        user: req.body.user,
      },
    });

    //si el usuario ya existe devuelvo el error
    if (user) {
      return res.render("/users/register", {
        errors: {
          user: {
            msg: "El usuario ya existe.",
          },
        },
        olds: req.body,
      });
    }

    //busco si el email ya existe
    let email = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    //si el email ya existe devuelvo el error
    if (email) {
      return res.render("/users/register", {
        errors: {
          email: {
            msg: "El email ya existe.",
          },
        },
        olds: req.body,
      });
    }

    let data = {
      name: req.body.name,
      lastname: req.body.lastname,
      user: req.body.user,
      email: req.body.email,
      type: 0,
      password: bcryptjs.hashSync(req.body.password, 10),
      img: image,
      country: req.body.country,
      cel: req.body.cel,
      reviews: req.body.reviews,
    };
    //guarda el usuario en base de datos
    let newUser = await db.User.create(data);

    // SE LOGEA EN SESSION
    req.session.userLogged = newUser;

    //redirigimos al login
    return res.redirect(`/user/login`);
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userId");
    return res.redirect("/");
  },

  profile: async (req, res) => {
    let orders = await db.Order.findAll({
      where: { userId: req.session.userLogged.id },
    });
    // return res.send(orders);
    return res.render(path.join("users", "perfil"), {
      orders,
    });
  },
};

module.exports = userController;
