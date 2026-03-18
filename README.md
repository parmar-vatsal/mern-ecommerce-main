# MERN E-Commerce Project

A full-stack e-commerce project built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes a user-facing storefront, an admin dashboard, and a robust backend REST API.

## Project Structure
- `web_services`: Backend REST API (Node.js/Express)
- `web_panel`: User frontend/Storefront (React)
- `web_admin`: Admin dashboard for managing products, orders, and users (React)

## Prerequisites
Before running this project on a new device, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally, or use a MongoDB Atlas URI)

---

## Setup Instructions

### 1. Backend API (`web_services`)
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd web_services
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the `web_services` folder.
   - You can copy the contents of `sample.env` inside this folder and fill in the correct details (like your MongoDB URL and JWT Secret).
4. Start the backend server:
   ```bash
   npm start
   ```
   *The API will run at http://localhost:5002/*

---

### 2. User Storefront (`web_panel`)
1. Open a new terminal and navigate to the user frontend directory:
   ```bash
   cd web_panel
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the `web_panel` folder using `sample.env` as a reference (ensure it points to your backend URL).
4. Start the frontend server:
   ```bash
   npm start
   ```
   *The Storefront will run at http://localhost:5001/*

---

### 3. Admin Dashboard (`web_admin`)
1. Open a third terminal and navigate to the admin frontend directory:
   ```bash
   cd web_admin
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the `web_admin` folder using `sample.env` as a reference.
4. Start the admin server:
   ```bash
   npm start
   ```
   *The Admin Dashboard will run at http://localhost:5003/*

## Usage Notes
- Make sure to create an admin user in your database or refer to any initialization script you may have (e.g., `web_services/scripts/createAdminUser.js`) to access the admin dashboard.
