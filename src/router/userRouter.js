const express = require("express");
const router = express.Router();

//controller
const userController = require("../controllers/userController");

//middlewares
const uploadFile = require("../middlewares/multerConfigUser");
const validations = require("../middlewares/validarRegistro");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// Formulario de registro
router.get("/register", guestMiddleware, userController.formRegister);

// Procesar el registro
router.post(
  "/register",
  uploadFile.single("imgperfil"),
  validations,
  userController.registerProcess
);

// Formulario de login
router.get("/login", guestMiddleware, userController.fromLogin);

// Procesar el login
router.post("/login", userController.loginProcess);

// Perfil de Usuario
router.get("/profile/", authMiddleware, userController.profile);

// Logout
router.get("/logout/", userController.logout);

//router.post("/edit/:id", upload.single("imgperfil"), userController.editUser);

module.exports = router;
