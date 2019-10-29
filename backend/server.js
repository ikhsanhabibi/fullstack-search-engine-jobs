// server.js

const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  config = require("./DB");

const jobRoute = require("./routes/job.route");

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we're connected!");
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/jobs", jobRoute);
let port = process.env.PORT || 4000;

const server = app.listen(port, function() {
  console.log("Listening on port " + port + " 🚀");
});
