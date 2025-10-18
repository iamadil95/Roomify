const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Listing = require("./listing.js");
const User = require("./user.js");
const { required } = require("joi");

const bookingSchema = new Schema({
    listing: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true, // removes extra whitespace
    },
    roomType: {
        type: String,
        enum : ["Single Bed", "Double Bed", "Deluxe Room", "King Bed", "Suite"],
        required: true,
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
        min: 1,
        default: 1,
        max: 10,
    },
    specialRequests: {
        type: String,
        trim: true,
    },
    paymentMethod: {
        type: String,
         enum: ["Cash","Credit Card", "Debit Card", "UPI"],
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 1,
    },
},
    { timestamps: true } // Automatically adds createdAt and updatedAt
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;