const Joi = require("joi");

//Listing schema Validation
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(1),
    cancellationPolicy: Joi.string().required(),
         images: Joi.any().optional(),
        category: Joi.string().required().valid(
            "Trending", "Iconic Cities", "Villas", "Mountains", "Mansions",
            "Poolside", "Glamping", "Rural Retreats", "Snow Escapes", "The Riviera", "Luxe"
        ),
        amenities: Joi.array().items(Joi.string()).optional().allow(''),
  }).required(),
  deleteImages: Joi.array().items(Joi.string()),
});


// Review Schema Validation
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required(),
  }).required(),
});


//Booking Schema Validation
module.exports.bookingSchema = Joi.object({
  booking: Joi.object({
    fullName: Joi.string().trim().required().messages({
      "string.empty": "Full name is required",
    }),
    roomType: Joi.string()
      .valid("Single Bed", "Double Bed", "Deluxe Room", "King Bed", "Suite")
      .required()
      .messages({
        "any.only": "Please select a valid room type",
      }),
    checkIn: Joi.date().required().messages({
      "date.base": "Check-in must be a valid date",
      "any.required": "Check-in date is required",
    }),
    checkOut: Joi.date().required().messages({
      "date.base": "Check-out must be a valid date",
      "any.required": "Check-out date is required",
    }),
    guests: Joi.number().min(1).max(10).required().messages({
      "number.base": "Guests must be a number",
      "number.min": "At least 1 guest is required",
      "number.max": "Maximum 10 guests allowed",
    }),
    specialRequests: Joi.string().allow("", null).trim(),
    paymentMethod: Joi.string()
      .valid("Cash","Credit Card", "Debit Card", "UPI")
      .required()
      .messages({
        "any.only": "Please select a valid payment method",
      }),
  }).required(),
});
