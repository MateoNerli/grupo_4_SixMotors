const express = require("express");
const router = express.Router();
const editCreateDelete = require("../controllers/editCreateDeleteController.js");
const multer = require("multer");
const path = require("path");
const validarProducts = require("../middlewares/validarProducts");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/products"));
  },
  filename: (req, file, cb) => {
    // console.log(file);
    const newFileName =
      "products-img-" +
      Date.now() +
      path.extname(file.originalname).toLowerCase();
    cb(null, newFileName);
  },
});

const upload = multer({ storage });
router.get("/create", authMiddleware, editCreateDelete.create);

router.post(
  "/create",
  upload.single("img"),
  validarProducts,
  authMiddleware,
  editCreateDelete.store
);

router.get("/edit/:id", adminMiddleware, editCreateDelete.edit);

router.post(
  "/edit/:id",
  adminMiddleware,
  upload.single("img"),
  editCreateDelete.update
);

router.delete("/delete/:id", editCreateDelete.delete);

module.exports = router;
