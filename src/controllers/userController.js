const path = require("path");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
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
    db.query("SELECT * FROM users", (error, results) => {
      if (error) {
        console.error("Error al obtener usuarios: " + error);
        return res.render("error", { message: "Error al obtener usuarios" });
      }
      res.render(path.join("users", "usuario"), { users: results });
    });
  },

  handleRegistration: (req, res) => {
    try {
      const { nombre, usuario, email, password } = req.body;

      // Consulta SQL para insertar el usuario en la base de datos (sin hashear la contraseña)
      const query =
        "INSERT INTO users (nombre, usuario, email, password) VALUES (?, ?, ?, ?)";

      // Ejecutar la consulta
      db.query(query, [nombre, usuario, email, password], (error, result) => {
        if (error) {
          console.error("Error al registrar usuario: " + error);
          return res.status(500).send("Error en el registro");
        }

        res.redirect("/login"); // Redirige al usuario después del registro exitoso
      });
    } catch (error) {
      console.error("Error en el registro:", error);
      res.status(500).send("Error en el registro");
    }
  },
  handleLogin: (req, res) => {
    try {
      // Tu lógica para manejar el inicio de sesión aquí...
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      res.status(500).send("Error en el inicio de sesión");
    }
  },
};

module.exports = userController;
