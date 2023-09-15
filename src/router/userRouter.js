const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  validacionesRegistro,
  resultadoValidacion,
} = require("../middlewares/validarRegistro");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../../public/images/users"));
  },

  filename: (req, file, cb) => {
    console.log(file);
    const newFileName =
      "users-img-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});
const upload = multer({ storage });

router.get("/login", userController.login);
router.get("/register", userController.formRegister);
router.post(
  "/register",
  validacionesRegistro,
  resultadoValidacion,
  userController.register
);
router.get("/:id", userController.usuario);
router.get("/edit/:id", userController.edit);
router.post("/edit/:id", upload.single("img"), userController.editUser);
router.put("/edit/:id", userController.editUser);
module.exports = router;
