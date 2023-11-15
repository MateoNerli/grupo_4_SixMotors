const express = require("express");
const router = express.Router();
const productsApi = require("../../controllers/api/productsApi");

//Rutas

router.get("/", productsApi.list);
router.get("/:id", productsApi.detail);

module.exports = router;
