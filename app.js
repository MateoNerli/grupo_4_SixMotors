// ************ Require's ************
const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");
const logger = require("morgan"); // para ver las peticiones que llegan al servidor

// ************ express() ************
const app = express();

// ************ session() ************
app.use(
  session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: true,
  })
);

// ************ Template Engine ************
app.set("views", path.resolve(__dirname, "./src/views"));
app.set("view engine", "ejs");

// ************ Route System ************
const homeRouter = require("./src/router/homeRouter");
const productRouter = require("./src/router/productRouter");
const userRouter = require("./src/router/userRouter");
const editCreateRouter = require("./src/router/edit-create-deleteRouter");
const apiRouter = require("./src/router/api/apiRoutes");

const sessionMiddleware = require("./src/middlewares/sessionMiddleware");
const sessionTimeMiddleware = require("./src/middlewares/sessionTimeMiddleware");
const menuMiddleware = require("./src/middlewares/menuMiddleware");

const userLoggedMiddleware = require("./src/middlewares/userMiddleware");
const adminMiddleware = require("./src/middlewares/adminMiddleware");

// .ENV
require("dotenv").config(); // para usar variables de entorno

// ************ cookies() ************
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(adminMiddleware);

// ************ Middlewares ************
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use("/", express.static(__dirname + "/public"));
app.use("/", express.static(__dirname + "/design"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const puerto = 3000;
app.listen(puerto, () => {
  console.log("Aplicación corriendo en el puerto 3000");
});

app.use(logger("dev"));
app.use("/", homeRouter);
app.use("/products", productRouter);
app.use("/products/configs", editCreateRouter);
app.use("/user", userRouter);
app.use("/api/", apiRouter);

// esto es un middleware de tiempo de session
app.use(sessionMiddleware);
app.use(sessionTimeMiddleware);
app.use(menuMiddleware);

// ************ Error ************

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.render("errors/404");
  //next(createError(404));
});

// vista no encontrada
app.use(function (err, req, res, next) {
  console.log(err);
  if (err["view"] != null) {
    console.error("errorView", err.message);
    return res.render("errors/500");
  }
  return next();
});

// error handler
app.use(function (err, req, res, next) {
  console.log("errorHandler", err.message);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
