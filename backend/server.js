// Dependencies
const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  passport = require('passport'),
  mongoose = require("mongoose"),
  config = require("./config/DB");

// routes.js
const jobRoute = require("./routes/job.route");
const userRoute = require("./routes/user.route");

// Mongoose
mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// On error & connected database
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use("/jobs", jobRoute);
app.use("/users", userRoute);

app.get('/', (req, res, next) => {
  res.send('Backend home');
});

// Port Number
let port = process.env.PORT || 4000;

// Start Server
const server = app.listen(port, function () {
  console.log("Listening on port " + port + " 🚀");
});
