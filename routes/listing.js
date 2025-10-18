const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing, validateBooking } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const bookingController = require("../controllers/booking.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// The specific search route now comes first
router.get("/search", wrapAsync(listingController.searchListings));

// Index & Create
router.route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn,
    upload.single("listing[images]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

//New Form
router.get("/new", isLoggedIn, (listingController.renderNewForm)
);

// Show, Update, Delete
router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(isLoggedIn,
    isOwner,
    upload.array("listing[images]", 4), //4 images is the limit
    validateListing,
    wrapAsync(listingController.updateListing))
  .delete(isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );

//Edit Form
router.get("/:id/edit", isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

// RENDER NEW BOOKING FORM
router.get("/:id/bookings/new", isLoggedIn, wrapAsync(bookingController.renderNewForm));

// CREATE BOOKING
router.post("/:id/bookings", isLoggedIn, validateBooking, wrapAsync(bookingController.createBooking));


// Index Route - All Listings
// router.get("/", wrapAsync(listingController.index)
// );

//SHOW route
// router.get("/:id", wrapAsync(listingController.showListing)
// );

//Create Route
// router.post("/", isLoggedIn, validateListing, wrapAsync(listingController.createListing)
// );

// //Edit Route
// router.get("/:id/edit", isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.renderEditForm)
// );

//Update Route
// router.put("/:id", isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing)
// );

//Delete Route
// router.delete("/:id", isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.destroyListing)
// );

module.exports = router;