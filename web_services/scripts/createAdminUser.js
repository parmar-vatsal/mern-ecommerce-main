const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const User = require("../models/User");
const CryptoJS = require("crypto-js");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

async function createAdminUser() {
  try {
    await mongoose.connect(process.env.DB_URL_DEVELOPMENT);
    console.log("Connected to DB");

    const adminEmail = "admin@gmail.com";
    const adminPassword = "Admin@123";

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log("Admin user already exists");
      process.exit(0);
    }

    const newAdmin = new User({
      name: "Admin",
      email: adminEmail,
      password: CryptoJS.AES.encrypt(adminPassword, process.env.PASS_SECRET).toString(),
      isAdmin: true,
    });

    await newAdmin.save();
    console.log(`Admin user created with email: ${adminEmail} and password: ${adminPassword}`);
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin user:", error);
    process.exit(1);
  }
}

createAdminUser();
