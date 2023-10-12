const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/autos", (req, res) => {
  productController.list(req, res, 0);
});

router.get("/autopartes", (req, res) => {
  productController.list(req, res, 1);
});
router.get("/detail/:id/", adminMiddleware, productController.detail);
router.get("/carrito", authMiddleware, productController.viewCart);
router.get("/search", productController.search);

module.exports = router;
