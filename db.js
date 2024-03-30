const mongoose = require("mongoose");
require("dotenv").config();

//const mongoURL = "mongodb://localhost:27017/hotels";
//const mongoURL ="mongodb+srv://aditi30102003:Vso9kZTxTZFh73Su@cluster0.nh8looj.mongodb.net/";
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mURL = process.env.MONGODB_URL;
// Set up mongodb connection
mongoose.connect(mURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Define event listeners for database connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});
db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the database connection
module.exports = db;
