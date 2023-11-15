const express = require("express");
const router = express.Router();
const productsApi = require("../../controllers/api/productsApi");

//Rutas

router.get("/", productsApi.list);
router.get("/:id", productsApi.detail);
router.post("/create", productsApi.create);
router.put("/update/:id", productsApi.update);
router.delete("/delete/:id", productsApi.destroy);

module.exports = router;
