const express = require("express");
const router = express.Router();
const editCreateDelete = require("../controllers/editCreateDeleteController.js");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/products"));
  },
  filename: (req, file, cb) => {
    console.log(file);
    const newFileName =
      "products-img-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage });
router.get("/create", editCreateDelete.create);

router.post("/create", upload.single("img"), editCreateDelete.createPost);

router.get("/edit/:id", editCreateDelete.edit);

router.post("/edit/:id", editCreateDelete.editPost);

router.delete("/delete/:id", editCreateDelete.eliminar);

module.exports = router;
