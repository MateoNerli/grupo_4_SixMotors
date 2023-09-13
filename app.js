// ************ Require's ************
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const express = require("express");
const methodOverride = require("method-override");

// ************ express() ************
const app = express();

// ************ Middlewares ************
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/", express.static(__dirname + "/design"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ************ Conexion a la base de datos ******
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost', // Cambiar cuando tengamos la base en algun servidor no se **ver**
  user: 'root',
  password: '123456789',
  database: 'sixmotors',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

// Agrega la conexión a la base de datos como una propiedad de app para que puedas acceder a ella en tus rutas
app.set('db', db);


// ************ Template Engine ************
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));

// ************ Route System ************
const homeRouter = require("./src/router/homeRouter");
const productRouter = require("./src/router/productRouter");
const userRouter = require("./src/router/userRouter");
const editCreateRouter = require("./src/router/edit-create-deleteRouter");

const puerto = 3000;
app.listen(puerto, () => {
  console.log("Aplicación corriendo en el puerto 3000");
});

app.use("/", homeRouter);
app.use("/", productRouter);
app.use("/", editCreateRouter);
app.use("/", userRouter);
