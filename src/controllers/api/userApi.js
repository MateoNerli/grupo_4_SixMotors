const db = require("../../database/models");

const user = db.User;

const userApi = {
  list: (req, res) => {
    let limit = req.query.limit || 0; // 0 significa sin límite
    limit = parseInt(limit); // Asegurarse de que limit sea un número entero

    let options = {};
    if (limit > 0) {
      options.limit = limit;
    }

    user.findAll(options).then((users) => {
      let respuesta = {
        meta: {
          status: 200,
          title: "Usuarios",
          total: users.length,
          url: "/api/users",
        },
        data: users,
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
          url: "/api/users/:id",
        },
        data: user,
      };
      res.json(respuesta);
    });
  },
};

module.exports = userApi;
