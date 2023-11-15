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
};

module.exports = userApi;
