const User = require("../models/user"); 

// Render Signup Form
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

// Handle Signup
module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body; 
         
        const newUser = new User({ email, username });
         // Register user with hashed password (passport-local-mongoose)
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);

        // Auto-login after signup
        
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "User is registered successfully");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

// Render Login Form
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

// Redirect After Login
module.exports.redirectLogin = async (req, res) => {
    req.flash("success", "Welcome to Roomify!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

// Logout
module.exports.logout = (req, res, next) => {
    //immediate work after logout
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You have been logged out !");
        res.redirect("/listings");
    });
};