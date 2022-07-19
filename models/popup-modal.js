const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

//
const Popup_Schema = new Schema({
  active_date: { type: Date, required: true },
  popup_image: String,
  imgcontent: {
    data: Buffer,
    contentType: String,
  },
});

Popup_Schema.plugin(uniqueValidator);

const Popup = mongoose.model("popups", Popup_Schema);

module.exports = { Popup };
