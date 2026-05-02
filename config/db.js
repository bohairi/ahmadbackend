require("dotenv").config()

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("before connect")
    await mongoose.connect(
      process.env.MONGO_URL
    );

    console.log("✅ Connected to DB");
  } catch (err) {
    console.log("❌ DB Error:");
    console.log(err.message);
  }
};

module.exports = connectDB;