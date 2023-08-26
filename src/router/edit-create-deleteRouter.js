const express = require("express");
const router = express.Router();
const editCreateDelete = require("../controllers/editCreateDeleteController.js");

router.get("/productos/create", editCreateDelete.create);

router.post("/productos/create", editCreateDelete.createPost);

router.get("/productos/edit/:id", editCreateDelete.edit);

router.post("/productos/edit/:id", editCreateDelete.editPost);

router.delete("/productos/delete/:id", editCreateDelete.eliminar);

module.exports = router;
