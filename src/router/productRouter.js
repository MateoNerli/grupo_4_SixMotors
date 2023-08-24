const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/autos", productController.productosVehiculos);
router.get("/autopartes", productController.productosAutopartes);
router.get("/:id/", productController.detail);
router.get("/carrito", productController.carrito);
router.get("/contacto", productController.contacto);

module.exports = router;
