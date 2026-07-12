const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const productRoutes = require("./routes/productRoutes");

// Create backend application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection

// console.log("DEBUG URI:", process.env.MONGO_URI);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/api/admin", authRoutes);

app.use("/api/inquiries", inquiryRoutes);

app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Backend Running");
});

const PORT = process.env.PORT;

// console.log("USER:", process.env.EMAIL_USER);
// console.log("PASS:", process.env.EMAIL_PASS ? "Present" : "Missing");
// console.log("ADMIN:", process.env.ADMIN_EMAIL);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});