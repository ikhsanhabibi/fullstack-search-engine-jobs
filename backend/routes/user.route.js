const express = require("express");
const userRoutes = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/DB");

const bcrypt = require("bcryptjs");
// Require User model in our routes module
let User = require("../models/User");

// Register
userRoutes.post("/register", (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  bcrypt.hash(newUser.password, 10, function(err, hash) {
    newUser.password = hash;
    console.log(newUser.password);
    newUser
      .save()
      .then(user => {
        res
          .status(201)
          .json({ message: "User has been added successfully", user: user });
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });
});

// Authenticate
userRoutes.post("/authenticate", (req, res, next) => {
  console.log("authenticate");

  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: "JWT " + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: "Wrong password" });
      }
      console.log("username: " + user.toJSON().username);
    });
  });
});

// Profile
userRoutes.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user });
  }
);

// Defined get data(index or listing) route
userRoutes.route("/").get(function(req, res) {
  User.find(function(err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

module.exports = userRoutes;
