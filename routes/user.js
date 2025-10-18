const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

// Signup routes
router.route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

// Login routes using router.route()
router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,  // save intended URL before login
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.redirectLogin   // redirect after successful login
  );


// Logout route
router.get("/logout", userController.logout);

module.exports = router;
