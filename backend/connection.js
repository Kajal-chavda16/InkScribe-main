const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kajalchavda4439:kajal1610@cluster0.zrar8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Error connecting to Database ", err.message);
  }
};

module.exports = connectDB;
