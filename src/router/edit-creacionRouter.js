const express = require("express");
const router = express.Router();
const editCreate = require("../controllers/editCreateController.js");

router.get("/create", editCreate.create);

router.post("/create", editCreate.createPost);

router.get("/edit/:id", editCreate.edit);

module.exports = router;
