const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/detailsAutos/:id", productController.detailAutos);
router.get("/detailsAutopartes/:id", productController.detailAutopartes);
router.get("/autopartes", productController.autopartes);
router.get("/autos", productController.autos);
router.get("/carrito", productController.carrito);
router.get("/contacto", productController.contacto);

// Sprint 4 peticiones
router.get("/products", productController.autopartes);
//router.get("/products/create", editCreateController.create);
router.get("/products/:id", productController.detailAutopartes);
//router.post("/products", productController.createProduct);
//router.get("/products/:id/edit", ditCreateController.edit);
//router.put("/products/:id", productController.updateProduct);
//router.delete("/products/:id", productController.deleteProduct);

module.exports = router;