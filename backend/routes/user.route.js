const express = require("express");
const userRoutes = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/DB");

const bcrypt = require("bcryptjs");

const checkAuth = require("../check-auth");
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
        res.status(500).json({ message: "Failed to register!", error: err });
        alert("Failed to register!");
      });
  });
});

// Login
userRoutes.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }

      const token = jwt.sign(
        { email: fetchedUser.email, _id: fetchedUser._id },
        config.secret,
        { expiresIn: 604800 }
      );

      res.status(200).json({
        token: token
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    });
});

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
