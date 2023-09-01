const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/products/autos", productController.productosVehiculos);
router.get("/products/autopartes", productController.productosAutopartes);
router.get("/products/:id/", productController.detail);
router.get("/productos/carrito", productController.carrito);
router.get("/products/contacto", productController.contacto);
router.get("/productos/search", productController.search);

module.exports = router;
