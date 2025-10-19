# Roomify: A Full-Stack Accommodation Rental Platform

**Roomify** is a feature-rich, full-stack web application designed for listing, discovering, and booking unique accommodations worldwide. It offers a robust and intuitive user experience, following the MVC (Model-View-Controller) architecture, and is built with a modern tech stack including Node.js and Express.

**Live Demo:** https://roomify-3g9x.onrender.com/listings

---

## ✨ Key Features

* **RESTful Routing**: Clean and predictable API endpoints for all resources.
* **User Authentication**: Secure user registration and login system implemented with Passport.js, including session management and middleware to protect routes.
* **Full CRUD Functionality**: Users have complete control over their listings, reviews, and bookings (Create, Read, Update, Delete).
* **Dynamic Image Uploads**: Seamless image uploads to a cloud-based storage provider (Cloudinary) using `multer`.
* **Interactive Geocoding**: Listings are automatically geocoded using the Mapbox API to display their location on an interactive map on the listing's show page.
* **Comprehensive Booking System**: Users can book properties for specific date ranges, view all their past and upcoming bookings, and cancel them if needed.
* **Search and Filtering**: A powerful search functionality allows users to find listings by destination, and they can further filter results by categories like "Trending," "Mountains," or "Poolside".
* **Data Validation**: Server-side schema validation using Joi ensures data integrity before it's saved to the database.
* **Tax Calculation**: Prices are dynamically updated to include applicable taxes, providing transparency to the user.
* **Responsive UI**: Built with Bootstrap 5, the application is fully responsive and provides a seamless experience on desktops, tablets, and mobile devices.

---
## 🔄 Application Workflow

The application provides a complete journey for both guests and hosts:

1.  **Sign Up & Login**: A user first creates an account or logs in. The system uses sessions to maintain user authentication state.
2.  **Create a Listing**: Once logged in, a user can "Become a Host" and create a new property listing, providing details like title, description, price, location, and images.
3.  **Book a Stay**: Other users can browse or search for this listing and book it for a selected date range.
4.  **Leave a Review**: After a stay, the user can leave a rating and a comment on the listing's page.
5.  **Manage Bookings**: Users can view all their trips in the "My Bookings" section and have the option to cancel them.

---
## 💻 Tech Stack

* **Frontend**:
    * `EJS`
    * `HTML5`
    * `CSS3`
    * `JavaScript`
    * `Bootstrap 5`
* **Backend**:
    * `Node.js`
    * `Express.js`
    * `Passport.js`
    * `ejs-mate`
* **Database & ODM**:
    * `Mongoose`
* **Tools & APIs**:
    * `Cloudinary`
    * `Mapbox API`
    * `connect-mongo`
    * `Multer`

---

## ⚙️ Environment Setup

To run this project locally, you need to configure your environment variables.

1.  **Create a `.env` file** in the root directory of the project.
2.  **Add the following variables** to your `.env` file. Replace the placeholder values with your actual credentials.

    ```env
    # Cloudinary Credentials for image storage
    CLOUD_NAME=your_cloudinary_cloud_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_API_SECRET=your_cloudinary_api_secret

    # Database connection string
    ATLASDB_URL=your_database_connection_string

    # Mapbox API Token for geocoding and maps
    MAP_TOKEN=your_mapbox_public_token

    # Secret for signing the session ID cookie
    SECRET=somesupersecretstring
    ```

---

## 📜 License

This project is licensed under the MIT License. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. For more details, see the [LICENSE](iamadil95/roomify/Roomify-68a77855ea842c7b65eb20511043413f39f7da2f/LICENSE) file.

---

## 👨‍💻 Author

* **Adil Imam**
* **GitHub**: [@iamadil95](https://github.com/iamadil95)
