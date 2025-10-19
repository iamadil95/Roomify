if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
//  console.log(process.env);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const { required } = require("joi");

//Routes
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const bookingRouter = require("./routes/booking.js");

//Database Connection
const dbUrl = process.env.ATLASDB_URL;
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("ERROR in MONGO SESSION STORE", err);
});

//Session and Flash
const sessionOptions = {
   store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 1000,
    httpOnly: true, // prevent cross-scripting attack
  },
};

app.use(session(sessionOptions));
app.use(flash());


//Passport Setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser()); //storing
passport.deserializeUser(User.deserializeUser()); //removing

//Global Middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  console.log(res.locals.success);
  next();
});

//Note : signed cookies is used to prevent tampering

//Router connection
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
app.use("/bookings", bookingRouter);

//Pages
app.get("/privacy", (req, res) => {
    res.render("pages/privacy.ejs");
});

app.get("/terms", (req, res) => {
    res.render("pages/terms.ejs");
});

//Error handling
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
  //`/.*/` is a regex expression that is to match all other routes. Only `"*"` will give errors due to updation of express.js
});

//Custom Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).render("error", {
    message: err.message || "Something went wrong",
    error: err
  });
});

//Server Start
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});