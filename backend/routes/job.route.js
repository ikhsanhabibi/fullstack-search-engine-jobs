// job.route.js
const express = require("express");
const app = express();
const jobRoutes = express.Router();

const checkAuth = require("../check-auth");

// Require Job model in our routes module
let Job = require("../models/Job");

// Defined store route
jobRoutes.route("/add").post(checkAuth, (req, res) => {
  let job = new Job(req.body);
  job
    .save()
    .then(job => {
      res.status(200).json({ Job: "Job has been added successfully" });
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

// Defined get data(index or listing) route
jobRoutes.route("/").get((req, res) => {
  Job.find(function(err, jobs) {
    if (err) {
      console.log(err);
    } else {
      res.json(jobs);
    }
  });
});

// Defined edit route
jobRoutes.route("/edit/:id").get(checkAuth, (req, res) => {
  let id = req.params.id;
  Job.findById(id, function(err, job) {
    res.json(job);
  });
});

//  Defined update route
jobRoutes.route("/update/:id").post(checkAuth, (req, res) => {
  Job.updateOne({ _id: req.params.id }, req.body, function(err, result) {
    res.send(
      err === null ? { msg: "Update complete", job: req.body } : { msg: err }
    );
  });
});

// Defined delete | remove | destroy route
jobRoutes.route("/delete/:id").get(checkAuth, (req, res) => {
  Job.deleteOne({ _id: req.params.id }, function(err, job) {
    if (err) res.json(err);
    else {
      res.json("Successfully removed");
    }
  });
});

jobRoutes.route("/deleteAll").get(checkAuth, (req, res) => {
  Job.deleteMany({}, function(err, obj) {
    if (err) res.json(err);
    else {
      res.json("Successfully removed");
    }
  });
});

module.exports = jobRoutes;
