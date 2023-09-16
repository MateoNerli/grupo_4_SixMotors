const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathFolder = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "images",
      "users"
    );
    cb(null, pathFolder);
  },
  filename: function (req, file, cb) {
    const newName =
      "ImgProfile-" + Date.now() + path.extname(file.originalname);
    cb(null, newName);
  },
});

const uploadFile = multer({ storage });

module.exports = uploadFile;
