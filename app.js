// ************ Require's ************
const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");

const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware");

// ************ express() ************
const app = express();

// ************ session() ************
app.use(
  session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
  })
);
// ************ cookies() ************
app.use(cookies());

app.use(userLoggedMiddleware);

// ************ Middlewares ************
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use("/", express.static(__dirname + "/public"));
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
app.use("/products", productRouter);
app.use("/products/configs", editCreateRouter);
app.use("/user", userRouter);
