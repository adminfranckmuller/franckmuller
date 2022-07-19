const express = require("express");
const AnnouncementControllers = require("../controllers/announcement-controller");

const router = express.Router();

router.get("/get_announcement", AnnouncementControllers.GetAnnouncement);
router.post("/add_announcement", AnnouncementControllers.Add_Announcement);
router.post(
  "/delete_announcement",
  AnnouncementControllers.Delete_Announcement
);

module.exports = router;
