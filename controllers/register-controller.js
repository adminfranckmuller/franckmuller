require("../Database/connection");
const HttpsError = require("../models/http-error");
const {
  Influncer,
  Coldleads,
  MystryBox,
  NonWinner,
} = require("../models/register-model");

// Influncer register user
const Influncer_register = async (req, res, next) => {
  const {
    name,
    email,
    telephone,
    country,
    twitter,
    facebook,
    instagram,
    metamaskId,
  } = req.body;
  // checking if user already exists
  let existingUser;
  try {
    existingUser = await Influncer.find({
      $or: [{ email }, { telephone }, { metamaskId }],
    });
    // existingUser = await Influncer.find({ email, telephone, metamaskId });
  } catch (err) {
    return next(new HttpsError("Something went wrong signup users", 500));
  }

  if (existingUser.length >= 1) {
    return next(
      new HttpsError("Email Already Exists, Please try to login.", 422)
    );
  }
  const createUser = new Influncer({
    name,
    email,
    telephone,
    country,
    twitter,
    facebook,
    instagram,
    metamaskId,
    active_date: new Date(),
  });

  try {
    await createUser.save();
    console.log("tried");
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }

  res.status(201).json({ user: createUser.toObject({ getters: true }) });
};
// Codelead register user
const Coldleads_register = async (req, res, next) => {
  const { email, twitter, facebook, instagram } = req.body;
  // checking if user already exists
  let existingUser;
  try {
    existingUser = await Coldleads.findOne({ email: email });
  } catch (err) {
    return next(new HttpsError("Something went wrong signup users", 500));
  }
  console.log(existingUser);
  if (existingUser) {
    return next(
      new HttpsError("Email Already Exists, Please try to login.", 422)
    );
  }

  const createUser = new Coldleads({
    email,
    twitter,
    facebook,
    instagram,
    active_date: new Date(),
  });

  try {
    await createUser.save();
    console.log("tried");
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }

  res.status(201).json({ user: createUser.toObject({ getters: true }) });
};
// MysteryBoxHolders register user
const MysteryBoxHolders_register = async (req, res, next) => {
  const {
    name,
    email,
    telephone,
    country,
    twitter,
    facebook,
    instagram,
    metamaskId,
  } = req.body;

  // checking if user already exists
  let existingUser;
  try {
    existingUser = await MystryBox.find({
      $or: [{ email }, { telephone }, { metamaskId }],
    });
    // existingUser = await MystryBox.find({ email, telephone, metamaskId });
  } catch (err) {
    return next(new HttpsError("Something went wrong signup users", 500));
  }
  if (existingUser.length >= 1) {
    return next(
      new HttpsError("Email Already Exists, Please try to login.", 422)
    );
  }

  const createUser = new MystryBox({
    name,
    email,
    telephone,
    country,
    twitter,
    facebook,
    instagram,
    metamaskId,
    active_date: new Date(),
  });

  try {
    await createUser.save();
    console.log("tried");
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }
  res.status(201).json({ user: createUser.toObject({ getters: true }) });
};
// Non-winner register user
const NonWinner_register = async (req, res, next) => {
  const {
    name,
    email,
    telephone,
    country,
    twitter,
    facebook,
    instagram,
    metamaskId,
  } = req.body;

  // checking if user already exists
  let existingUser;
  try {
    existingUser = await NonWinner.find({
      $or: [{ email }, { telephone }, { metamaskId }],
    });
    // existingUser = await NonWinner.find({ email, telephone, metamaskId });
  } catch (err) {
    return next(new HttpsError("Something went wrong signup users", 500));
  }
  if (existingUser.length >= 1) {
    return next(
      new HttpsError("Email Already Exists, Please try to login.", 422)
    );
  }

  const createUser = new NonWinner({
    name,
    email,
    telephone,
    country,
    twitter,
    facebook,
    instagram,
    metamaskId,
    active_date: new Date(),
  });

  try {
    await createUser.save();
    console.log("tried");
  } catch (err) {
    console.log("failed");
    return next(new HttpsError("Registering failed, Please try again.", 500));
  }

  res.status(201).json({ user: createUser.toObject({ getters: true }) });
};

exports.Influncer_Register = Influncer_register;
exports.Coldleads_Register = Coldleads_register;
exports.MysteryBoxHolders_Register = MysteryBoxHolders_register;
exports.NonWinner_register_Register = NonWinner_register;
