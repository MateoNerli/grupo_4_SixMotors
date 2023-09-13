// const path = require("path");
// const products = require("../datos/products.json");

// const userController = {
//   login: (req, res) => {
//     res.render(path.join("users", "login"));
//   },
//   register: (req, res) => {
//     res.render(path.join("users", "register"));
//   },
//   usuario: (req, res) => {
//     res.render(path.join("users", "usuario"));
//   },
// };

// module.exports = userController;
const path = require("path");
const mysql = require("mysql"); // Agrega la importación de la librería mysql

// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost", // Cambiar
  user: "root",
  password: "123456789",
  database: "sixmotors",
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: " + err.stack);
    return;
  }
  console.log("Conexión a la base de datos exitosa");
});

const userController = {
  login: (req, res) => {
    res.render(path.join("users", "login"));
  },
  register: (req, res) => {
    res.render(path.join("users", "register"));
  },
  usuario: (req, res) => {
    // Realiza una consulta para obtener todos los usuarios
    db.query("SELECT * FROM users", (error, results) => {
      if (error) {
        console.error("Error al obtener usuarios: " + error);
        // Trata el error adecuadamente, por ejemplo, mostrando un mensaje de error en la vista
        return res.render("error", { message: "Error al obtener usuarios" });
      }

      // Renderiza la vista de usuario y pasa los resultados de la consulta
      res.render(path.join("users", "usuario"), { users: results });
    });
  },
};

module.exports = userController;