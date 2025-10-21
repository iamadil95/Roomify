# Roomify

Roomify is a modern full‑stack web application for creating, exploring, reviewing, and managing property listings.It focuses on an intuitive user experience, responsive design, and real‑world features such as user authentication, listing management, reviews, and interactive maps.

Roomify helps users discover and share short‑term rental or property listings by providing an easy way to post properties with amenities, visualize locations on a map, and collect feedback from other users.

The Project is live at : https://roomify-3g9x.onrender.com/listings

---

## Table of contents
- Project overview
- Key features
- Application workflow
- Tech stack
- Installation and setup
- Environment Setup
- Running the app locally
- API design
- Deployment
- License
- Contact

---

## Project Overview

Roomify is a clone-inspired full-stack app designed to simulate a property listing platform. The primary goals are:
- Provide a realistic project to practice end-to-end web development.
- Demonstrate RESTful API design and MVC architecture.
- Showcase integration with third‑party APIs (Mapbox) and cloud services (MongoDB Atlas).
- Deliver a responsive and accessible UI using EJS and Bootstrap.

This repository contains the full application (frontend templates + backend server), built to be easy to run locally and deploy to cloud hosting.

---

## Key Features

- User authentication: signup, login, logout with session management.
- Create, update, and delete property listings (title, description, price, amenities, photos, location).
- Add and delete reviews for listings (ratings + text).
- Filter listings by amenities, price range, and other criteria.
- Integrated Mapbox API for interactive location visualization and geocoding.
- Responsive and interactive UI built with EJS templates and Bootstrap.
- RESTful APIs implemented with a clear MVC (Model-View-Controller) architecture.

---

## Application Workflow

Typical user journey:
1. A user signs up or logs in.
2. The user creates a new listing — adding title, description, price, a set of amenities, and a location (address).
3. Listings are displayed on index pages with filter controls; each listing includes an interactive Mapbox map view.
4. Other users can view a listing detail page, read location info and reviews, and submit reviews.
5. Users can edit or delete their own listings and reviews through the UI.

Architecture:
- The app follows the MVC pattern:
  - Models: Mongoose schemas for users, listings, and reviews.
  - Views: EJS templates render frontend pages.
  - Controllers/Routes: Express route handlers implement RESTful endpoints and business logic.

---

## Tech Stack

- Frontend: HTML, CSS, EJS, Bootstrap, JavaScript  
- Backend: Node.js, Express.js  
- Database: MongoDB Atlas (hosted)  
- APIs: Mapbox (maps & geocoding)  
- Deployment: Render  
- Version control: Git & GitHub

Common libraries (examples):
- Mongoose for MongoDB ODM
- express-session / connect-mongo for sessions
- dotenv for environment variables
- Passport for authentication
- multer / Cloudinary (for using image uploads)

---

## Installation and Setup

Prerequisites:
- Node.js (>= 18 recommended)
- npm
- A MongoDB Atlas cluster or connection string
- A Mapbox account and API token

1. Clone the repository
   - git clone https://github.com/iamadil95/Roomify.git
   - cd Roomify

2. Install dependencies (run in the project root where package.json is located)
```bash
npm install
# Run this command in the project root (the folder containing package.json) to download all node modules listed in package.json
```

3. Environment variables
   - Create a `.env` file in the project root (see the "Environment Setup" section below for exact variables).

4. (Optional) Seed data
   - If the repo contains seed scripts (e.g., `data.js`), run them to populate sample listings:
     - node data.js

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

## Running the App Locally

- Start the app:
  - npm start
  - or: node app.js

- Open a browser and visit:
  - http://localhost:3000 (or the PORT you've configured via environment variables)

Notes:
- Ensure your MongoDB URI, Cloudinary credentials (if used), and Mapbox token are valid and active.
- Check server logs for any startup errors and missing environment variables.

---

## API Design

Roomify follows RESTful conventions and organizes resources into logical endpoints. Example endpoints (adjust paths to match your actual router prefixes):

- Listings
  - GET /listings — list all listings (supports query filters)
  - GET /listings/:id — listing details (includes reviews and map coordinates)
  - POST /listings — create a new listing (authenticated)
  - PUT /listings/:id — update a listing (owner only)
  - DELETE /listings/:id — delete a listing (owner only)

- Reviews
  - POST /listings/:id/reviews — create a review for a listing (authenticated)
  - DELETE /listings/:id/reviews/:reviewId — delete a review (owner of review or listing)

- Users (authentication / profiles)
  - GET /users/:id — view user profile (public)
  - POST /users/register — register new user
  - POST /users/login — authenticate user
  - POST /users/logout — log out

Authentication:
- Session or token-based authentication protects creation and modification endpoints.
- Ensure authorization checks are implemented in route middleware (e.g., ensure user is listing owner before update/delete).

---

## Deployment

- Roomify is deployed on Render (https://render.com).
- Database runs on MongoDB Atlas.
- Deployment checklist:
  - Add ATLASDB_URL, MAP_TOKEN, CLOUDINARY credentials (if used), SECRET, and PORT to Render environment variables.
  - Configure the web service to use the start command (e.g., `node app.js`).
  - If using file uploads (images), configure cloud storage or a provider such as Cloudinary and set corresponding credentials in environment variables.

---

## License

This project is provided under the MIT License. See LICENSE for details.

---

## Contact

Maintainer: Adil
GitHub: https://github.com/iamadil95
