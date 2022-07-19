require("../Database/connection");
const HttpsError = require("../models/http-error");
const { Announcements } = require("../models/announcement-model");

// getting all Announcements
const GetAnnouncement = async (req, res, next) => {
  let announcement;
  try {
    announcement = await Announcements.find();
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!announcement) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    // res.status(201).json({ user: "Hello" });
    res.status(200).json({
      announcement: announcement.map((u) => u.toObject({ getters: true })),
    });
  }
};
//  add Announcements
const Add_Announcement = async (req, res, next) => {
  const { title, active_date } = req.body;
  // const Dates = new Date(active_date);
  // var CurrentDate = new Date();
  // const currentime = CurrentDate.getTime();
  // Dates.setTime(currentime);
  // console.log(new Date(Dates));
  let existingUser;
  try {
    existingUser = await Announcements.findOne({ announcement_title: title });
  } catch (err) {
    return next(new HttpsError("Something went wrong signup users", 500));
  }
  if (existingUser) {
    return next(
      new HttpsError("Announcement Already Exists, Please try to another.", 422)
    );
  }
  const create_announcement = new Announcements({
    announcement_title: title,
    active_date: new Date(active_date),
  });
  try {
    await create_announcement.save();
    console.log("tried");
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }
  res
    .status(201)
    .json({ user: create_announcement.toObject({ getters: true }) });
};
//  add Announcements
const delete_Announcement = async (req, res, next) => {
  const { id } = req.body;

  let DeleteUser;
  try {
    DeleteUser = await Announcements.deleteOne({ _id: id });
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }
  res.status(201).json({ user: DeleteUser });
  // res.status(201).json({ user: DeleteUser.toObject({ getters: true }) });
};

exports.GetAnnouncement = GetAnnouncement;
exports.Add_Announcement = Add_Announcement;
exports.Delete_Announcement = delete_Announcement;
