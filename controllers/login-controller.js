require("../Database/connection");
const HttpsError = require("../models/http-error");
const { Login } = require("../models/login-modal");
const fs = require("fs");
const { default: mongoose } = require("mongoose");

// Check Admin
const CheckAdmin = async (req, res, next) => {
  const { username, password } = req.body;
  let login;
  login = await Login.find({ username, password });
  if (login.length > 0) {
    res.status(200).json({
      login_user: login.map((u) => u.toObject({ getters: true })),
    });
  } else {
    next(new HttpsError("User Not Found.", 404));
  }
};
// Add Admin
const AddAdmin = async (req, res, next) => {
  const { username, password, admin_img } = req.body;
  const Admin_add = new Login({
    username,
    password,
    admin_type: "editor",
    admin_img,
    imgcontent: {
      data: fs.readFileSync(`uploads/register_admin/${req.file.filename}`),
      contentType: "image/png",
    },
  });
  let existingUser;
  try {
    existingUser = await Login.findOne({ username });
  } catch (err) {
    return next(new HttpsError("Something went wrong signup users", 500));
  }
  if (existingUser) {
    return next(
      new HttpsError("Username Already Exists, Please try to another.", 422)
    );
  }
  try {
    await Admin_add.save();
    console.log("tried");
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }
  res.status(201).json({ user: Admin_add.toObject({ getters: true }) });
};
// Get All login
const GetAdminUser = async (req, res, next) => {
  let AdminUser;
  try {
    AdminUser = await Login.find();
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!AdminUser) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    // res.status(201).json({ user: "Hello" });
    res.status(200).json({
      admin_user: AdminUser.map((u) => u.toObject({ getters: true })),
    });
  }
};
// Delete User
const delete_User = async (req, res, next) => {
  const { id } = req.body;
  let DeleteUser;
  try {
    DeleteUser = await Login.deleteOne({ _id: id });
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }
  res.status(201).json({ user: DeleteUser });
};
// Delete User
const edit_User = async (req, res, next) => {
  const { id, username, password } = req.body;
  let UpdatedUser;
  try {
    const userObjectId = mongoose.Types.ObjectId(id);
    UpdatedUser = await Login.updateOne(
      { _id: userObjectId },
      { $set: { username, password } }
    );
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }
  res.status(201).json({ user: UpdatedUser });
};

exports.CheckAdmin = CheckAdmin;
exports.Add_Admin = AddAdmin;
exports.Get_AdminUser = GetAdminUser;
exports.Delete_User = delete_User;
exports.Edit_User = edit_User;
