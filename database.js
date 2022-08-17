const mongoose = require("mongoose");

const reg_schema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  class: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  DOB: {
    type: Date,
    require: true,
  },
  pin: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
});

const Registration_Info = new mongoose.model("Registration_Info", reg_schema);

module.exports = Registration_Info;
