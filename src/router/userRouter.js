const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//validaciones registro
const {
  validacionesRegistro,
  resultadoValidacion,
} = require("../middlewares/validarRegistro");

//multer
const upload = require("../middlewares/multerConfigUser");

router.get("/login", userController.login);
router.get("/register", userController.formRegister);
router.get("/:id", userController.usuario);
router.get("/edit/:id", userController.edit);

router.post(
  "/register",
  validacionesRegistro,
  resultadoValidacion,
  userController.register
);

router.post("/edit/:id", upload.single("imgperfil"), userController.editUser);

module.exports = router;
