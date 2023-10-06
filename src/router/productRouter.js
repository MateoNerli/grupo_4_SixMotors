const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/autos", (req, res) => {
  productController.list(req, res, "vehiculo");
});

router.get("/autopartes", (req, res) => {
  productController.list(req, res, "autoparte");
});
router.get("/detail/:id/", productController.detail);
router.get("/carrito", productController.viewCart);
//router.post("/carrito", productController.addToCart);
//router.get("/contacto", productController.contacto);
router.get("/search", productController.search);

module.exports = router;
