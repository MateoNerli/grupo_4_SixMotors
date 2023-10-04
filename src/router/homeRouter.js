const express = require("express");
const homeController = require("../controllers/homeController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", homeController.home);
router.get("/cart", authMiddleware, homeController.cart);
router.get("/order/:id", authMiddleware, homeController.order);

module.exports = router;
