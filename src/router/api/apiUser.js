const express = require("express");
const router = express.Router();
const userApi = require("../../controllers/api/userApi");

//Rutas

router.get("/", userApi.list);
router.get("/:id", userApi.detail);
router.post("/create", userApi.create);
router.put("/update/:id", userApi.update);
router.delete("/delete/:id", userApi.destroy);

module.exports = router;
