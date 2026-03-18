const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config({ path: path.resolve(__dirname, ".env") });

async function checkProducts() {
  try {
    await mongoose.connect(process.env.DB_URL_DEVELOPMENT);
    console.log("Connected to DB");

    const count = await Product.countDocuments();
    console.log(`Total products: ${count}`);

    if (count > 0) {
      const products = await Product.find().limit(5);
      products.forEach(p => {
        console.log(`- ${p.title} (Image: ${p.image})`);
      });
    }

    process.exit(0);
  } catch (error) {
    console.error("Error checking products:", error);
    process.exit(1);
  }
}

checkProducts();
