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

      // agregar la lógica para guardar los datos de registro en la base de datos
      // ejemplos robados para revisar:
      // const query = "INSERT INTO users (nombre, usuario, email, password) VALUES (?, ?, ?, ?)";
      // db.query(query, [nombre, usuario, email, password], (error, result) => {
      //   if (error) {
      //     console.error("Error al registrar usuario: " + error);
      //     return res.status(500).send("Error en el registro");
      //   }
      //   res.redirect("/login"); // Redirige al usuario después del registro
      // });

    } catch (error) {
      console.error("Error en el registro:", error);
      res.status(500).send("Error en el registro");
    }
  },

  handleLogin: (req, res) => {
    try {
      const { usuario, password } = req.body;

      // Logica para verificar las credenciales del usuario en la base de datos
      // ejemplos a revisar 
      // const query = "SELECT * FROM users WHERE usuario = ? AND password = ?";
      // db.query(query, [usuario, password], (error, results) => {
      //   if (error) {
      //     console.error("Error al iniciar sesión: " + error);
      //     return res.status(500).send("Error en el inicio de sesión");
      //   }

      //   if (results.length === 0) {
      //     // Credenciales inválidas, muestra un mensaje de error
      //     return res.render(path.join("users", "login"), { error: "Credenciales incorrectas" });
      //   }

      //   // Inicio de sesión exitoso, puedes redirigir al usuario a su panel de control
      //   res.redirect("/dashboard");
      // });

    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      res.status(500).send("Error en el inicio de sesión");
    }
  },
};

module.exports = userController;