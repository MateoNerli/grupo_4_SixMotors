const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/DetailsAutos/:id", productController.detailAutos);
router.get("/DetailsAutopartes/:id", productController.detailAutopartes);
router.get("/autopartes", productController.autopartes);
router.get("/autos", productController.autos);
router.get("/carrito", productController.carrito);

module.exports = router;
