const express = require("express");
const registerControllers = require("../controllers/admin-controller");

const router = express.Router();

router.get("/get_influncer", registerControllers.Get_Influncer);
router.get("/get_coldlead", registerControllers.Get_ColdLead);
router.get("/get_mysterybox", registerControllers.Get_MysteryBox);
router.get("/get_nonwinner", registerControllers.Get_NonWinner);
//
router.post("/get_influnce_date", registerControllers.Get_Date_Influncer);
router.post("/get_coldlead_date", registerControllers.Get_Date_Coldlead);
router.post("/get_mysterybox_date", registerControllers.Get_Date_MysteryBox);
router.post("/get_nonwinner_date", registerControllers.Get_Date_Nonwinner);

module.exports = router;
