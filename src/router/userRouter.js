const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.home);
router.get("/login", userController.login);
router.get("/register", userController.register);
router.get("/user", userController.usuario);
router.get("/prodctDetails", userController.detail);
router.get("/autopartes", userController.autopartes);
router.get("/autos", userController.autos);
router.get("/carrito", userController.carrito);

module.exports = router;
