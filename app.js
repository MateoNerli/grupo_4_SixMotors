const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const puerto = 3000;

app.listen(puerto, () => {
  console.log("Aplicación corriendo en el puerto 3000");
});

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/detalles", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/detalles.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/carrito.html"));
});
