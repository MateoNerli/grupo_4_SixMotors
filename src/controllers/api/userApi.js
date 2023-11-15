const db = require("../../database/models");

const user = db.User;

const userApi = {
  list: (req, res) => {
    user.findAll().then((user) => {
      let respuesta = {
        meta: {
          status: 200,
          total: user.length,
          url: "/api/user",
        },
        data: user,
      };
      res.json(respuesta);
    });
  },
  detail: (req, res) => {
    user.findByPk(req.params.id).then((user) => {
      let respuesta = {
        meta: {
          status: 200,
          total: user.length,
          url: "/api/user/:id",
        },
        data: user,
      };
      res.json(respuesta);
    });
  },
  create: (req, res) => {
    user
      .create({
        name: req.body.name,
        lastname: req.body.lastname,
        user: req.body.user,
        email: req.body.email,
        password: req.body.password,
        img: req.file.filename,
        country: req.body.country,
        cel: req.body.cel,
        reviews: req.body.reviews,
      })
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/user/create",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/user/create",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
  update: (req, res) => {
    let userId = req.params.id;
    user
      .update(
        {
          name: req.body.name,
          lastname: req.body.lastname,
          user: req.body.user,
          email: req.body.email,
          img: req.file.filename,
          country: req.body.country,
          cel: req.body.cel,
          reviews: req.body.reviews,
        },
        {
          where: { id: userId },
        }
      )
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/user/update/:id",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "api/user/update/:id",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
  destroy: (req, res) => {
    let userId = req.params.id;
    user
      .destroy({ where: { id: userId }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/user/delete/:id",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "api/user/delete/:id",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
};

module.exports = userApi;
