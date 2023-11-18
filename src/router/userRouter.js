const express = require("express");
const router = express.Router();

//controller
const userController = require("../controllers/userController");

//middlewares
const uploadFile = require("../middlewares/multerConfigUser");
const validations = require("../middlewares/validarRegistro");
const controller = require("../controllers/userController");
const redirectIfAutenticated = require("../middlewares/redirectIfAutenticated");
const authMiddleware = require("../middlewares/authMiddleware");
const userValidationsLogin = require("../middlewares/userValidationsLogin");
const guestMiddleware = require("../middlewares/guestMiddleware");

// Formulario de login
router.get(
  "/login",
  guestMiddleware,
  redirectIfAutenticated,
  userController.fromLogin
);
// Procesar el login
router.post("/login", userController.loginProcess);

// Formulario de registro
router.get("/register", redirectIfAutenticated, userController.formRegister);
// Procesar el registro
router.post(
  "/register",
  uploadFile.single("img"),
  userValidationsLogin,
  validations,
  userController.registerProcess
);

// Perfil de Usuario
router.get("/profile/", authMiddleware, userController.profile);

// Logout
router.get("/logout/", userController.logout);
//router.post("/edit/:id", upload.single("imgperfil"), userController.editUser);

// router.get("/profile/edit/:id", userController.getEditarUsuario);
router.post("/update-user", userController.postEditarUsuario);
module.exports = router;
