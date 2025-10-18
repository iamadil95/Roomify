const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");
const Booking = require("./booking.js");

// Define Listing schema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  images: [
    {
      url: String,
      filename: String,
    },
  ],
  price: Number,
  location: String,
  country: String,
  cancellationPolicy: {
    type: String,
    default : "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in."
  },
  availableFrom: Date,
  availableTill: Date,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point'], // must be 'Point'
      required: false,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  // categories for filtering
  category: {
    type: String,
    enum: ["Trending",
      "Iconic Cities",
      "Villas",
      "Mountains",
      "Mansions",
      "Poolside",
      "Glamping",
      "Rural Retreats",
      "Snow Escapes",
      "The Riviera",
      "Luxe",
    ],
  },
  amenities: {
        type: [String], //  array of strings
    },
});

// Middleware: Delete all reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({
      _id: { $in: listing.reviews }
    });
  }
});

// Delete Bookings when a listing is deleted
listingSchema.post("findOneAndDelete", async function (listing) {
  if (listing) {
    await Booking.deleteMany({ listing: listing._id });
  }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;