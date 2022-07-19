require("../Database/connection");
const HttpsError = require("../models/http-error");
const {
  Influncer,
  Coldleads,
  MystryBox,
  NonWinner,
} = require("../models/register-model");

// getting Specific Influncer Users
const Influncer_GetDate = async (req, res, next) => {
  let users;
  const {
    GreaterValue = undefined,
    LesserValue = undefined,
    DayValue = undefined,
  } = req.body;
  // console.log(GreaterValue, LesserValue);
  try {
    if (DayValue === "today") {
      users = await Influncer.find({
        active_date: {
          $gte: GreaterValue,
        },
      });
    } else if (DayValue === "yesterday") {
      users = await Influncer.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "3day") {
      users = await Influncer.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "oneweek") {
      users = await Influncer.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "onemonth") {
      users = await Influncer.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "oneyear") {
      users = await Influncer.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else {
      users = await Influncer.find();
    }
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!users) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    // res.status(201).json({ user: "Hello" });
    res
      .status(200)
      .json({ influncer: users.map((u) => u.toObject({ getters: true })) });
  }
};
// getting Specific ColdLead Users
const Coldlead_GetDate = async (req, res, next) => {
  let users;
  const {
    GreaterValue = undefined,
    LesserValue = undefined,
    DayValue = undefined,
  } = req.body;
  // console.log(GreaterValue, LesserValue);
  try {
    if (DayValue === "today") {
      users = await Coldleads.find({
        active_date: {
          $gte: GreaterValue,
        },
      });
    } else if (DayValue === "yesterday") {
      users = await Coldleads.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "3day") {
      users = await Coldleads.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "oneweek") {
      users = await Coldleads.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "onemonth") {
      users = await Coldleads.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "oneyear") {
      users = await Coldleads.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else {
      users = await Coldleads.find();
    }
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!users) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    // res.status(201).json({ user: "Hello" });
    res
      .status(200)
      .json({ coldlead: users.map((u) => u.toObject({ getters: true })) });
  }
};
// getting Specific mysterybox Users
const Mysterybox_GetDate = async (req, res, next) => {
  let users;
  const {
    GreaterValue = undefined,
    LesserValue = undefined,
    DayValue = undefined,
  } = req.body;
  // console.log(GreaterValue, LesserValue);
  try {
    if (DayValue === "today") {
      users = await MystryBox.find({
        active_date: {
          $gte: GreaterValue,
        },
      });
    } else if (DayValue === "yesterday") {
      users = await MystryBox.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "3day") {
      users = await MystryBox.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "oneweek") {
      users = await MystryBox.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "onemonth") {
      users = await MystryBox.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "oneyear") {
      users = await MystryBox.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else {
      users = await MystryBox.find();
    }
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!users) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    // res.status(201).json({ user: "Hello" });
    res
      .status(200)
      .json({ mysterybox: users.map((u) => u.toObject({ getters: true })) });
  }
};
// getting Specific Non-winner Users
const Nonwinner_GetDate = async (req, res, next) => {
  let users;
  const {
    GreaterValue = undefined,
    LesserValue = undefined,
    DayValue = undefined,
  } = req.body;
  // console.log(GreaterValue, LesserValue);
  try {
    if (DayValue === "today") {
      users = await NonWinner.find({
        active_date: {
          $gte: GreaterValue,
        },
      });
    } else if (DayValue === "yesterday") {
      users = await NonWinner.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "3day") {
      users = await NonWinner.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "oneweek") {
      users = await NonWinner.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "onemonth") {
      users = await NonWinner.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else if (DayValue === "oneyear") {
      users = await NonWinner.find({
        active_date: {
          $gte: GreaterValue,
          $lt: LesserValue,
        },
      });
    } else {
      users = await NonWinner.find();
    }
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!users) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    // res.status(201).json({ user: "Hello" });
    res
      .status(200)
      .json({ nonwinner: users.map((u) => u.toObject({ getters: true })) });
  }
};
// getting Influncer Users
const Influncer_getUsers = async (req, res, next) => {
  let users;
  try {
    users = await Influncer.find().exec();
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!users) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    res
      .status(200)
      .json({ influncer: users.map((u) => u.toObject({ getters: true })) });
  }
};
// getting Coldleads Users
const Coldleads_getUsers = async (req, res, next) => {
  let users;
  try {
    users = await Coldleads.find().exec();
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!users) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    res
      .status(200)
      .json({ coldlead: users.map((u) => u.toObject({ getters: true })) });
  }
};
// getting Mysterybox Users
const Mysterybox_getUsers = async (req, res, next) => {
  let users;
  try {
    users = await MystryBox.find().exec();
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!users) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    res
      .status(200)
      .json({ mysterybox: users.map((u) => u.toObject({ getters: true })) });
  }
};
// getting Non-winner Users
const NonWinner_getUsers = async (req, res, next) => {
  let users;
  try {
    users = await NonWinner.find().exec();
  } catch (err) {
    return next(
      new HttpsError(
        "Something Went Wrong on server,Could not find users.",
        500
      )
    );
  }
  if (!users) {
    next(new HttpsError("Could not find place for the provided id.", 404));
  } else {
    res
      .status(200)
      .json({ nonwinner: users.map((u) => u.toObject({ getters: true })) });
  }
};

exports.Get_Influncer = Influncer_getUsers;
exports.Get_ColdLead = Coldleads_getUsers;
exports.Get_MysteryBox = Mysterybox_getUsers;
exports.Get_NonWinner = NonWinner_getUsers;
//
exports.Get_Date_Influncer = Influncer_GetDate;
exports.Get_Date_Coldlead = Coldlead_GetDate;
exports.Get_Date_MysteryBox = Mysterybox_GetDate;
exports.Get_Date_Nonwinner = Nonwinner_GetDate;
