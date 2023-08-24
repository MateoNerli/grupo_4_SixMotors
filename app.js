const express = require("express");
const app = express();

const fs = require("fs");

const path = require("path");

const homeRouter = require("./src/router/homeRouter");
const productRouter = require("./src/router/productRouter");
const userRouter = require("./src/router/userRouter");
const editCreateRouter = require("./src/router/edit-creacionRouter");

app.use(express.urlencoded({ extended: true }));

const puerto = 3000;

app.listen(puerto, () => {
  console.log("Aplicación corriendo en el puerto 3000");
});

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/", express.static(__dirname + "/design"));

app.set("view engine", "ejs");

app.set("views", path.resolve(__dirname, "./src/views"));

app.use("/", homeRouter);
app.use("/products", productRouter);
app.use("/", userRouter);
app.use("/", editCreateRouter);
