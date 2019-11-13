// Job.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Job
let JobSchema = new Schema(
  {
    Title: {
      type: String
    },
    Company: {
      type: String
    },
    City: {
      type: String
    },
    Country: {
      type: String
    },
    Internship: {
      type: String
    },
    Fulltime: {
      type: String
    },
    Parttime: {
      type: String
    },
    Summary: {
      type: String
    },
    Email: {
      type: String
    },
    Website: {
      type: String
    },
    PostedDate: {
      type: String
    },
    ScrapeDate: {
      type: Date
    }
  },
  {
    collection: "Job"
  }
);

const Job = (module.exports = mongoose.model("Job", JobSchema));
