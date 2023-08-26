const express = require("express");
const router = express.Router();
const editCreate = require("../controllers/editCreateController.js");

router.get("/productos/create", editCreate.create);

router.post("/productos/create", editCreate.createPost);

router.get("/productos/edit/:id", editCreate.edit);

router.post("/productos/edit/:id", editCreate.editPost);

module.exports = router;
