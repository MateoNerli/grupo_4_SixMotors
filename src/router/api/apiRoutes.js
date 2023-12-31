const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/apiControllers");

router.get("/product/:id", controller.product);
router.post("/checkout", controller.checkout);

module.exports = router;
