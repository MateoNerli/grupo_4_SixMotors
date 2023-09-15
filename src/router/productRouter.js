const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/autos", productController.productosVehiculos);
router.get("/autopartes", productController.productosAutopartes);
router.get("/detail/:id/", productController.detail);
router.get("/carrito", productController.carrito);
//router.get("/contacto", productController.contacto);
router.get("/search", productController.search);

module.exports = router;
