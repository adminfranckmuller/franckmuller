require("../Database/connection");
const fs = require("fs");
const HttpsError = require("../models/http-error");
const { Popup } = require("../models/popup-modal");

// getting all Announcements
const GetPopup = async (req, res, next) => {
  let popup;
  try {
    popup = await Popup.find();
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!popup) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    // res.status(201).json({ user: "Hello" });
    res.status(200).json({
      popup: popup.map((u) => u.toObject({ getters: true })),
    });
  }
};

//  add Announcements
const Add_Popup = async (req, res, next) => {
  const { popup_image, active_date } = req.body;
  const Dates = new Date(active_date);
  Dates.setDate(Dates.getDate());
  const PopupAdd = new Popup({
    popup_image,
    active_date: new Date(Dates),
    imgcontent: {
      data: fs.readFileSync(`uploads/${req.file.filename}`),
      contentType: "image/png",
    },
  });
  // return res.status(201).json({ user: "Hello" });
  let existingUser;
  try {
    existingUser = await Popup.findOne({ popup_image });
  } catch (err) {
    return next(new HttpsError("Something went wrong signup users", 500));
  }
  if (existingUser) {
    return next(
      new HttpsError("Popup Already Exists, Please try to another.", 422)
    );
  }
  try {
    await PopupAdd.save();
    console.log("tried");
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }
  res.status(201).json({ popup: PopupAdd.toObject({ getters: true }) });
};
// Delete Popup
const delete_Popup = async (req, res, next) => {
  const { id } = req.body;
  let DeleteUser;
  try {
    DeleteUser = await Popup.deleteOne({ _id: id });
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }
  res.status(201).json({ user: DeleteUser });
};

exports.PopupGet = GetPopup;
exports.PopupAdd = Add_Popup;
exports.PopupDelete = delete_Popup;
// exports.Add_Announcement = Add_Announcement;
// exports.Delete_Announcement = delete_Announcement;
