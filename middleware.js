// middleware.js

const Listing = require("./models/listing");
const Review = require("./models/review.js");
const Booking = require("./models/booking.js");
const { listingSchema , reviewSchema, bookingSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");

// Authentication Check -Middleware to check if the user is logged in
module.exports.isLoggedIn = (req, res, next) => {
  // console.log(req.path, "..", req.originalUrl);
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to create a listing!");
    return res.redirect("/login");
  }
  next();
};

//using res.locals cause passport doesnt have access to delete the redirect link
// Save Redirect URL
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
}

//Checks Current user is owner of listing or not
// Authorization: Listing Owner
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this listing !");
    return res.redirect(`/listings/${id}`);
  }
  next();
}
// Validation: Listing
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
// Validation: Review
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body, { convert: true }); //  allow conversion
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Authorization: Review Author
module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the author of this review !");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

//  Middleware for Booking Joi validation
module.exports.validateBooking = (req, res, next) => {
  const { error } = bookingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

module.exports.isBookingOwner = async (req, res, next) => {
    let { bookingId } = req.params;
    let booking = await Booking.findById(bookingId);
    if (!booking.user.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to cancel this booking.");
        return res.redirect(`/bookings`);
    }
    next();
};
