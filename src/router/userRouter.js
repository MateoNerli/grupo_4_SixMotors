// userRouter.js
const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/login", userController.login);
router.get("/register", userController.register);

// Rutas para manejar el registro e inicio de sesión
router.post("/register", userController.handleRegistration);
router.post("/login", userController.handleLogin);

module.exports = router;
