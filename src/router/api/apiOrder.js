const express = require("express");
const router = express.Router();
const orderApi = require("../../controllers/api/ordersApi");

//Rutas

router.get("/", orderApi.list);
router.get("/:id", orderApi.detail);

module.exports = router;
