const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

//
const Login_Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  admin_type: { type: String, required: true },
  admin_img: String,
  imgcontent: {
    data: Buffer,
    contentType: String,
  },
});

Login_Schema.plugin(uniqueValidator);

const Login = mongoose.model("users", Login_Schema);

module.exports = { Login };
