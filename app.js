const express = require("express"); //requiero express
const app = express(); //ejecuto express

const fs = require("fs"); //requiero fs

const path = require("path"); //requiero path

const userRouter = require("./src/router/userRouter"); //requiero el router

const puerto = 3000;

app.listen(puerto, () => {
  console.log("Aplicación corriendo en el puerto 3000");
});

app.use(express.json()); //para que pueda leer json
app.use("/", express.static(__dirname + "/public")); //para que pueda leer archivos estaticos
app.use("/", express.static(__dirname + "/design"));

app.set("views", path.resolve(__dirname, "./src/views")); //para que pueda leer views
app.set("view engine", "ejs"); //para que pueda leer ejs

app.use("/", userRouter); //para que pueda leer el router

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/index.html"));
// });

// app.get("/Nav-Footer", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./views/Nav-Footer.html"));
// });

// app.get("/productDetail", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/productDetail.html"));
// });

// app.get("/register", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/register.html"));
// });

// app.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/login.html"));
// });

// app.get("/carrito", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/carrito.html"));
// });

// app.get("/home", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/home.html"));
// });

// app.get("/autopartes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/autopartes.html"));
// });

// app.get("/home2", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/home2.html"));
// });

// app.get("/usuario", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/usuario.html"));
// });

// app.get("/autos", (req, res) => {
//   res.sendFile(path.join(__dirname, "/views/autos.html"));
// });
