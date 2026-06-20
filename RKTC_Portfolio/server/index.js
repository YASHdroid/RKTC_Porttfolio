const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes")

dotenv.config();

// Create backend application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection

console.log("DEBUG URI:", process.env.MONGO_URI);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(
    "/api/admin",
    authRoutes
)

// Test route
app.get("/", (req, res) => {
    res.send("Backend Running");
});


const PORT = process.env.PORT;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});