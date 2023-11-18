const path = require("path");
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
      //   console.log(errors);
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
    // Validar los datos
    let errores = validationResult(req);

    // Si hay errores, retornarlos a la vista
    if (!errores.isEmpty()) {
      let errors = errores.mapped();
      console.log(errors);
      return res.render("users/register", { errors: errors, olds: req.body });
    }

    // Verificar si el usuario ya existe
    let user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // Si el usuario ya existe, devolver error
    if (user) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado.",
          },
        },
        olds: req.body,
      });
    }

    // Crear el usuario
    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      img: req.file ? req.file.filename : "default.png",
    };

    // Guardar el usuario en la base de datos
    await db.User.create(userToCreate);

    // Redirigir al usuario al login
    return res.redirect("/user/login");
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

  // edit: async (req, res) => {
  //   const usuarioId = req.params.id;
  //   const usuario = await db.User.findByPk(usuarioId);
  //   return res.render(path.join("users", "editUser"), {
  //     usuario,
  //   });
  // },

  postEditarUsuario: async (req, res) => {
    try {
      const usuarioId = req.session.userLogged.id;
      console.log(`Usuario ID: ${usuarioId}`);

      const usuario = await db.User.findByPk(usuarioId);
      console.log("Usuario antes de la actualización:", usuario);

      if (!usuario) {
        console.log("Usuario no encontrado");
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      const usuarioActualizado = {
        ...usuario,
        ...req.body,
      };
      console.log("Usuario actualizado:", usuarioActualizado);

      await db.User.update(usuarioActualizado, {
        where: { id: usuarioId },
      });

      console.log("Usuario después de la actualización:", usuario);

      return res.redirect("/user/profile");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al editar el usuario" });
    }
  },
};

module.exports = userController;
