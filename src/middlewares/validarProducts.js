const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("name").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("price").notEmpty().withMessage("Tienes que escribir un precio"),
  body("description")
    .notEmpty()
    .withMessage("Tienes que escribir una descripción"),
  body("colors").notEmpty().withMessage("Tienes que elegir una color"),
  body("img").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];
