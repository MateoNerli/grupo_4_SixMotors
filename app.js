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
