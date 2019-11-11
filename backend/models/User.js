const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const config = require("../config/DB");
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
      required: true,
      unique: true
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

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      console.log(newUser);
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
