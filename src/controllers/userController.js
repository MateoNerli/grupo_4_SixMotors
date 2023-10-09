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
    //validar los datos
    let errores = validationResult(req);

    //si hay errores, retornarlos a la vista
    if (!errores.isEmpty()) {
      let errors = errores.mapped();
      console.log(errors);
      return res.render("/user/login", { errors: errors, olds: req.body });
    }

    //leo el json
    let user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    //console.log(req.body);
    //buscar al usuario
    if (user) {
      let passOk = bcryptjs.compareSync(req.body.password, user.password);
      if (passOk) {
        //si la password es correcta se guarda el ususario en session
        req.session.userLogged = user;
        req.session.lastActitity = Date.now();

        //si recordar usuario esta activado enviamos una cookie con el email
        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, {
            maxAge: 1000 * 60 * 60,
            secure: true,
            httpOnly: true,
          });
        }
        //redirigimos al menu de usuario
        return res.redirect("/user/profile");
      } else {
        //si la password no es correcta devolvemos el error
        return res.render("/users/login", {
          errors: {
            password: {
              msg: "La contraseña no es válida.",
            },
          },
          olds: req.body,
        });
      }
    } else {
      return res.render("/users/login", {
        errors: { email: { msg: "No se encontró el usuario", olds: req.body } },
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
      user: req.session.userLogged,
    });
  },
};

module.exports = userController;
