const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.createBooking = async (req, res) => {
  const { id } = req.params; // Listing ID
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  const { fullName, roomType, checkIn, checkOut, guests, specialRequests, paymentMethod } = req.body.booking;

  //  Calculate totalPrice on backend
  const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
  const totalPrice = listing.price * nights;

  const booking = new Booking({
    listing: listing._id,
    user: req.user._id,
    fullName,
    roomType,
    checkIn,
    checkOut,
    guests,
    specialRequests,
    paymentMethod,
    totalPrice
  });

  await booking.save();

  req.flash("success", "Booking confirmed!");
 res.redirect("/bookings");
};


module.exports.renderMyBookings = async (req, res) => {
    const userId = req.user._id;
  // Find all bookings made by the current user and populate the listing details
  
  const myBookings = await Booking.find({ user: userId }).populate("listing");

  // Use .map() to create a new array with final prices calculated
    const bookingsWithFinalPrice = myBookings.map(booking => {
        let finalPrice = booking.totalPrice; // Default to the base price

        // Only calculate tax if the listing still exists
        if (booking.listing) {
            const taxRate = (booking.listing.price <= 7500) ? 0.12 : 0.18;
            const totalTax = Math.round(booking.totalPrice * taxRate);
            finalPrice = booking.totalPrice + totalTax;
        }
        
        // Return a new object that includes the original booking data plus the new finalPrice
        return { ...booking.toObject(), finalPrice };
    });
  
    res.render("bookings/mybooking.ejs", { myBookings: bookingsWithFinalPrice });
};


module.exports.renderNewForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  res.render("bookings/new.ejs", { listing });
};


 // Deletes a booking
module.exports.destroyBooking = async (req, res) => {
  const { bookingId } = req.params;
  await Booking.findByIdAndDelete(bookingId);
  req.flash("success", "Booking successfully cancelled!");
  res.redirect("/bookings");
};