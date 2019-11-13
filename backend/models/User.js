const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const uniqueValidator = require("mongoose-unique-validator");

let UserSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true,
      set: toLower
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      minlength: 6,
      bcrypt: true
    }
  },
  {
    collection: "User"
  }
);

UserSchema.plugin(uniqueValidator);

const User = (module.exports = mongoose.model("User", UserSchema));

function toLower(str) {
  return str.toLowerCase();
}
