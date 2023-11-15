const express = require("express");
const router = express.Router();
const userApi = require("../../controllers/api/userApi");

//Rutas

router.get("/", userApi.list);
router.get("/:id", userApi.detail);

module.exports = router;
