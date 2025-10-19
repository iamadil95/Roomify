const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const ExpressError = require("../utils/ExpressError");
const { cloudinary, storage } = require("../cloudConfig.js");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// Search Listings
module.exports.searchListings = async (req, res) => {
    //  Get destination and dates from the URL query
    const { destination } = req.query;
    let filter = {};

    // This now ONLY filters by destination
    if (destination) {
        filter.location = { $regex: destination, $options: "i" };
    }

    const allListings = await Listing.find(filter);

    if (allListings.length === 0) {
        req.flash("error", "No listings found in that destination.");
        return res.redirect("/listings");
    }

    res.render("listings/index.ejs", { allListings });
};

// Index - Show all listings
module.exports.index = async (req, res) => {
    const { category } = req.query;
    const filter = {};
    // If a category is provided in the query, filter listings by that category
    if (category) {
        // If yes, add the category to our filter
        filter.category = category;
    }
    // If no category was provided, the filter remains empty.

    const allListings = await Listing.find(filter);
    res.render("listings/index.ejs", { allListings });
};

// Render New Form
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

// Show One Listing
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews", populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "This listing does not exist!");
        return res.redirect("/listings");   //  prevents double response
    }

let taxAmount = 0;
    if (listing.price) {
        const taxRate = (listing.price <= 7500) ? 0.12 : 0.18;
        taxAmount = Math.round(listing.price * taxRate);
    }

    console.log(listing);
    res.render("listings/show.ejs", { listing, taxAmount });
};

// Create New Listing
module.exports.createListing = async (req, res) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    }).send();

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.geometry = response.body.features[0].geometry;

    // Put the single image from req.file into an array before saving
    if (req.file) {
        newListing.images = [{ url: req.file.path, filename: req.file.filename }];
    }

    //represent owner id info
    let savedListing = await newListing.save();
    console.log(savedListing);

    req.flash("success", "New Listing is Created !");
    res.redirect("/listings");
};

// Render Edit Form
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "This listing does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = null;
    if (listing.images && listing.images.length > 0) {
        originalImageUrl = listing.images[0].url.replace(
            "/upload",
            "/upload/w_250,h_250,c_fill"
        );
    }
    res.render("listings/edit.ejs",
        { listing, originalImageUrl });
};

// Update Listing
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
   
    listing.set(req.body.listing);

    //Re-run geocoding if the location has changed
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send();
    listing.geometry = response.body.features[0].geometry;


    // Add any new images that were uploaded
    if (req.files && req.files.length > 0) {
        const newImages = req.files.map(f => ({ url: f.path, filename: f.filename }));
        listing.images.push(...newImages);
    }

    // Delete any images that were checked
    if (req.body.deleteImages) {
        // Delete from Cloudinary
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        // Pull from the images array in MongoDB
        await listing.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } });
    }

    // Save the listing once after all changes
    await listing.save();

    req.flash("success", "Listing is Updated!");
    res.redirect(`/listings/${id}`); //Shows the updated listing 
};


// Delete Listing
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing is Deleted !");
    res.redirect("/listings");
};