const express = require("express");
const LoginControllers = require("../controllers/login-controller");
const router = express.Router();
const multer = require("multer");
// Upload File
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/register_admin");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
const type = upload.single("file");
router.post("/", LoginControllers.CheckAdmin);
router.post("/register", type, LoginControllers.Add_Admin);
router.post("/delete", LoginControllers.Delete_User);
router.post("/edit", LoginControllers.Edit_User);
router.get("/get_admin_user", LoginControllers.Get_AdminUser);
module.exports = router;
