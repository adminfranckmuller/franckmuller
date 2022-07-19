const express = require("express");
const PopupControllers = require("../controllers/popup-controller");
const multer = require("multer");
const router = express.Router();

// Upload File
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
const type = upload.single("file");

router.get("/get_popup", PopupControllers.PopupGet);
router.post("/add_popup", type, PopupControllers.PopupAdd);
router.post("/delete_popup", type, PopupControllers.PopupDelete);
module.exports = router;
