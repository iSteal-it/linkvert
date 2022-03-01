const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// setting up app
const app = express();
app.set("view engine", "ejs");
app.set('trust proxy',true);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.locals._ = _;
app.use(function(req, res, next) {
  res.locals.login = req.user;
  next();
});

app.get("/", function(req, res) {
  res.render("home")
});

app.get("/contact", function(req, res) {
  res.render("contact")
});

app.get("/login", function(req, res) {
  res.render("login")
});

app.get("/register", function(req, res) {
  res.render("register")
});


app.listen("3000", function() {
  console.log("server started at port 3000");
});
