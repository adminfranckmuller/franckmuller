const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

//
const Anounncement_Schema = new Schema({
  announcement_title: { type: String, required: true },
  active_date: { type: Date, required: true },
});

Anounncement_Schema.plugin(uniqueValidator);

const Announcements = mongoose.model("announcements", Anounncement_Schema);

module.exports = { Announcements };
