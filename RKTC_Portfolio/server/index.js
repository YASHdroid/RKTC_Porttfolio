const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Create backend application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });

// Test route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Start server
app.listen(1122, () => {
  console.log("Server running on port 1122");
});