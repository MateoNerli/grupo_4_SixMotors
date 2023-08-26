const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/products/autos", productController.productosVehiculos);
router.get("/products/autopartes", productController.productosAutopartes);
router.get("/products/:id/", productController.detail);
router.get("/products/carrito", productController.carrito);
router.get("/products/contacto", productController.contacto);

module.exports = router;
