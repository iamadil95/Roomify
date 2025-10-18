const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Booking = require("../models/booking.js");
const { isLoggedIn, isBookingOwner, validateBooking } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const bookingController = require("../controllers/booking.js");


//Shows the "My Bookings" page
router.get("/", isLoggedIn, wrapAsync(bookingController.renderMyBookings));



    // DELETE /bookings/:bookingId - The route to cancel a booking
router.delete(
    "/:bookingId",
    isLoggedIn,
    isBookingOwner, // Your new security middleware
    wrapAsync(bookingController.destroyBooking)
);


module.exports = router;

